import { Get, Route, Controller, SuccessResponse } from 'tsoa'
export interface PingResponse {
    message: string
    body?: string
}

@Route('ping')
export default class PingController extends Controller {
    @SuccessResponse('201', 'pinged')
    @Get('/')
    public async getMessage(): Promise<PingResponse> {
        return {
            message: 'hello',
        }
    }
}
