import { PrismaClient } from '../../generated/prisma';
import { RegisterPayload } from '../http/controllers/auth.register.controller';

type AuthRepositoryDTO = Pick<RegisterPayload, 'email' | 'name'>;
export async function authRegisterRepository ( data: AuthRepositoryDTO & { password_hash: string; } ) {
    const { name, email, password_hash } = data;
    const prisma = new PrismaClient();
    const user = await prisma.$transaction( [
        prisma.users.create( {
            data: {
                name, email, password_hash
            }
        } )
    ] );
    console.log( user );
    return;
}

