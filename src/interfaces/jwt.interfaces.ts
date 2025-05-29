export interface JWTRefreshTokenRepository {
    status?: string;
    userId: string;
    name?: string;
    email?: string;
    auth: {
        token?: string;
        refreshToken: string;
    };
}

export interface JWTPayloadSchema {
    id: string,
    name: string,
    email: string;
}
