import { Post, Route, Body, Controller } from 'tsoa'

interface PingResponse {
    message: string
    body?: string
}

@Route('auth')
export default class AuthController extends Controller {
    @Post('/')
    public async register(@Body() requestBody: string): Promise<PingResponse> {
        return {
            message: 'register',
            body: requestBody,
        }
    }
}
