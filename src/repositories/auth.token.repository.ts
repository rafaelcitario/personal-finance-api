export async function authRefreshTokenRepository ( data: { email: string, id: string, token: string; } ) {
    // procurar o token no banco
    // se não existir lançar erro

    // se existir criar accessToken e RefreshToken
    // atualizar no banco o refresh
    // retornar o access
    console.log( data );
}