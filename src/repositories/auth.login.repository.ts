import { PrismaClient } from '../../generated/prisma';
import { AuthRepositoryDTO } from '../DTOs/authLogin.DTO';
import { DatabaseReturn } from '../interfaces/dbReturn.interface';

export async function authLoginRepository ( data: AuthRepositoryDTO & { password_hash: string; } ): Promise<DatabaseReturn> {
    const { email, password_hash } = data;
    const prisma = new PrismaClient();
    const user = await prisma.$transaction( [
        prisma.users.findFirstOrThrow( {
            where: {
                email,
                password_hash
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        } )
    ] ).catch( ( err ) => {
        const typedError = err as Error;
        throw new Error( typedError.message );
    } );
    return { ...user[0] };
}