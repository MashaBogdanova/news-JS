import { Loader } from './loader';

export class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '4cde6291c9544972bccd4ca2fb48a1af',
        });
    }
}
