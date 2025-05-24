import z from 'zod';
import 'dotenv/config';


const envSchema = z.object( {
    NODE_ENV: z.enum( ['development', 'test', 'production'] ).default( 'development' ),
    SERVER_HOST: z.string().default( 'localhost' ),
    SERVER_PORT: z.coerce.number().default( 4433 ),
} );


const _env = envSchema.safeParse( process.env );

if ( !_env.success ) {
    const message = 'Some problem in envoronment variables.';
    console.error( message );
    throw new Error( message );
}

export const ENV = _env.data;