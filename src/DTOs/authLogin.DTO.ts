import { AuthPayload } from '../interfaces/auth.login.interface';

export type AuthRepositoryDTO = Pick<AuthPayload, 'email'>;
