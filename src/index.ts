import { JwtAuthenticationMiddleware } from "./middlewares/AuthenticationMiddleware/implements/JwtAuthenticationMiddleware";


const authorizationMiddleware = new JwtAuthenticationMiddleware()


export { authorizationMiddleware }
