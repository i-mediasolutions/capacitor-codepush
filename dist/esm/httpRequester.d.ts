import type { Callback } from "./callbackUtil";
export declare module Http {
    const enum Verb {
        GET = 0,
        HEAD = 1,
        POST = 2,
        PUT = 3,
        DELETE = 4,
        TRACE = 5,
        OPTIONS = 6,
        CONNECT = 7,
        PATCH = 8
    }
    interface Response {
        statusCode: number;
        body?: string;
    }
    interface Requester {
        request(verb: Verb, url: string, callback: Callback<Response>): void;
        request(verb: Verb, url: string, requestBody: string, callback: Callback<Response>): void;
    }
}
/**
 * XMLHttpRequest-based implementation of Http.Requester.
 */
export declare class HttpRequester implements Http.Requester {
    private contentType;
    constructor(contentType?: string | undefined);
    request(verb: Http.Verb, url: string, callbackOrRequestBody: Callback<Http.Response> | string, callback?: Callback<Http.Response>): void;
    /**
     * Gets the HTTP method name as a string.
     * The reason for which this is needed is because the Http.Verb enum corresponds to integer values from native runtime.
     */
    private getHttpMethodName;
}
