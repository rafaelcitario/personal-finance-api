import * as express from 'express';
declare global {
    namespace Express {
        export interface Request {
            jwtPayload?: string | JwtPayload;
        }
    }
}