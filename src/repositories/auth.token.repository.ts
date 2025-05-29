import { JWTRefreshTokenRepository } from '../interfaces/jwt.interfaces';
import { prisma } from '../lib/prisma';

export async function authRefreshTokenRepository ( data: JWTRefreshTokenRepository ): Promise<{
    id: string;
    token: string;
    users_id: string;
    createdAt: Date;
    updatedAt: Date;
}> {
    try {
        let token = await prisma.refreshTokens.findFirst( {
            where: {
                users_id: data.userId
            },
            select: {
                id: true,
                token: true,
                users_id: true,
                createdAt: true,
                updatedAt: true
            }
        } );

        if ( !token ) {
            token = await prisma.refreshTokens.create( {
                data: {
                    token: data.auth.refreshToken,
                    users_id: data.userId
                },
                select: {
                    id: true,
                    token: true,
                    users_id: true,
                    createdAt: true,
                    updatedAt: true
                }
            } );
        }

        token = await prisma.refreshTokens.update( {
            where: {
                id: token.id,
                users_id: data.userId
            },
            data: {
                token: data.auth.refreshToken
            },
            select: {
                id: true,
                token: true,
                users_id: true,
                createdAt: true,
                updatedAt: true
            }
        } );

        return token;

    } catch ( e ) {
        const typedError = e as Error;
        throw new Error( typedError.message );
    }
}