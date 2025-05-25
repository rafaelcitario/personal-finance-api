import { RegisterPayload } from '../http/controllers/auth.register.controller';

type AuthRepositoryDTO = Pick<RegisterPayload, 'email' | 'name'>;
export function authRegisterRepository ( data: AuthRepositoryDTO & { password_hash: string; } ) {
    const { name, email, password_hash } = data;
    const database = [{
        name: 'pimenta',
        email: 'pimenta@gmail.com.br',
        password_hash: 'dfc29b6b50bd9c8e2efc95752a54cb7838ef34b68686883c215f5295f7b60141650e753726944678da1eca95a7ebe321475faecc9bc6a9205ebd805adbe7dd77'
    }];
    // TODO: add database connection to find login and password
    const temp = [name, email, password_hash, database];
    console.log( temp );
}

