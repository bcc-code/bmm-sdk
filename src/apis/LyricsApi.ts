/* tslint:disable */
/* eslint-disable */
/**
 * BMM Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Lyrics,
} from '../models/index';
import {
    LyricsFromJSON,
    LyricsToJSON,
} from '../models/index';

export interface LyricsIdDeleteRequest {
    id: number;
}

export interface LyricsIdGetRequest {
    id: number;
}

export interface LyricsIdPutRequest {
    id: number;
    lyrics?: Lyrics;
}

export interface LyricsPostRequest {
    lyrics?: Lyrics;
}

/**
 * 
 */
export class LyricsApi extends runtime.BaseAPI {

    /**
     */
    async lyricsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Lyrics>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/lyrics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LyricsFromJSON));
    }

    /**
     */
    async lyricsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Lyrics>> {
        const response = await this.lyricsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async lyricsIdDeleteRaw(requestParameters: LyricsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling lyricsIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/lyrics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async lyricsIdDelete(requestParameters: LyricsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.lyricsIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async lyricsIdGetRaw(requestParameters: LyricsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Lyrics>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling lyricsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/lyrics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LyricsFromJSON(jsonValue));
    }

    /**
     */
    async lyricsIdGet(requestParameters: LyricsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Lyrics> {
        const response = await this.lyricsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async lyricsIdPutRaw(requestParameters: LyricsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling lyricsIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/lyrics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: LyricsToJSON(requestParameters.lyrics),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async lyricsIdPut(requestParameters: LyricsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.lyricsIdPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async lyricsPostRaw(requestParameters: LyricsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/lyrics`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LyricsToJSON(requestParameters.lyrics),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async lyricsPost(requestParameters: LyricsPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.lyricsPostRaw(requestParameters, initOverrides);
    }

}