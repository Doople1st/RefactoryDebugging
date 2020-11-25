# Code Debug Fixing

1. Rename env file from "env" to ".env"
2. Move set "config" variable after set process.env according to ".env" file with dotenv.config(). to prevent undefiened const config
because the .env has not been loaded.
3. Remove "{" and "}" from "module.exports = { config };
4. Change module.export in authService.js to module.exports
5. Change module.export in userInfoService.js to module.exports
6. assign getUserInfo function as an object's property into module.exports
7. resp.data["accessToken"] in authCallbackService.js change to res.data["access_token"]
8. Change getUserInfo function into asynchronus function and use await instead of then. Therefore, we can use await at authCallbackService
const user = await UserServices.getUserInfo(accessToken); because we need to wait function getUserInfo to return the data.


# Environment Variable Assignment
- CLIENT_ID, set according to the given clientId by github OAuth API.
- CLIENT_SECRET, set according to the given client secert generatede by github API.
- OAUTH_URL, set to "https://github.com/login/oauth" because it's the route to get github access token
- API_URL, set to "https://api.github.com" as the base route of github API.