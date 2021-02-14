// @ts-ignore
import {get} from '@loopback/rest';

export class HelloController {
    // @ts-ignore
    @get('/hello')
    hello(): string {
        return 'Hello world!';
    }
}