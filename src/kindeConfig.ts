import 'dotenv'
const {KindeClient, GrantType} = require("@kinde-oss/kinde-nodejs-sdk");

const kinde = new KindeClient ({
    domain: process.env.KINDE_DOMAIN,
    clientId: process.env.KINDE_CLIENT_ID,
    clientSecret: process.env.KINDE_CLIENT_SECRET,
    redirectUri: process.env.KINDE_REDIRECT_URI,
    logoutRedirectUri: process.env.KINDE_LOGOUT_REDIRECT_URI,
    grantType: GrantType.PKCE
})

export default kinde;