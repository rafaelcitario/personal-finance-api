import { PrismaClient } from '../../generated/prisma';
import { RegisterPayload } from '../http/controllers/auth.register.controller';

type AuthRepositoryDTO = Pick<RegisterPayload, 'email' | 'name'>;
export async function authRegisterRepository ( data: AuthRepositoryDTO & { password_hash: string; } ) {
    const prisma = new PrismaClient();
    await prisma.$transaction( [prisma.users.create( { data } )] );
}

