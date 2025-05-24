import express from 'express';
import cors from 'cors';
import { ENV } from './env';

const app = express();


app.use( cors() );
app.use( express.json() );



app.listen( ENV.SERVER_PORT, ENV.SERVER_HOST, ( err ) => {

    if ( err ) throw new Error( err.stack );
    console.log( 'server is running at port: ', ENV.SERVER_PORT );
} );