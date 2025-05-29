import { RegisterPayload } from '../http/controllers/auth.register.controller';
import { prisma } from '../lib/prisma';

type AuthRepositoryDTO = Pick<RegisterPayload, 'email' | 'name'>;
export async function authRegisterRepository ( data: AuthRepositoryDTO & { password_hash: string; } ) {
    await prisma.$transaction( [prisma.users.create( { data } )] );
}

