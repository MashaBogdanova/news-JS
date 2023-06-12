import { INewsRes } from "../app/types";

interface ILoaderOptions {
    [key: string]: string;
}

export class Loader {
    baseLink: string;
    options: ILoaderOptions;

    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        {endpoint, options = {}}: {endpoint: string, options?: ILoaderOptions},
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(
      options: ILoaderOptions,
      endpoint: string
    ): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load (
      method: string,
      endpoint: string,
      callback: (data: INewsRes) => void,
      options: ILoaderOptions = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then((res: Response) => this.errorHandler(res))
            .then((res: Response) => res.json() as Promise<INewsRes>)
            .then((data: INewsRes) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}
