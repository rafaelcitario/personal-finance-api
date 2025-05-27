import z from 'zod';
import 'dotenv/config';


const envSchema = z.object( {
    NODE_ENV: z.enum( ['development', 'test', 'production'] ).default( 'development' ),
    SERVER_HOST: z.string().default( 'localhost' ),
    SERVER_PORT: z.string().transform( port => parseInt( port ) ).default( '8000 ' ),
    JWT_SECRET: z.string(),
    JWT_REFRESH_SECRET: z.string(),
    JWT_TOKEN_LIFE: z.string().transform( ( time ) => parseInt( time ) ),
    JWT_REFRESH_LIFE: z.string().transform( ( time ) => parseInt( time ) )
} );


const _env = envSchema.safeParse( process.env );

if ( !_env.success ) {
    const message = 'Some problem in envoronment variables.';
    throw new Error( message );
}

export const ENV = _env.data;