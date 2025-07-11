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

export interface FileAchievementFileGetRequest {
    file: string;
    lastChanged?: number;
}

export interface FileProtectedTrackIdNameGetRequest {
    id: number;
    name: string;
    lastChanged?: number;
    download?: boolean;
}

export interface FileProtectedTypeIdNameGetRequest {
    type: string;
    id: number;
    name: string;
    lastChanged?: number;
}

/**
 * 
 */
export class FileApi extends runtime.BaseAPI {

    /**
     */
    async fileAchievementFileGetRaw(requestParameters: FileAchievementFileGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling fileAchievementFileGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.lastChanged !== undefined) {
            queryParameters['last-changed'] = requestParameters.lastChanged;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/File/achievement/{file}`.replace(`{${"file"}}`, encodeURIComponent(String(requestParameters.file))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async fileAchievementFileGet(requestParameters: FileAchievementFileGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.fileAchievementFileGetRaw(requestParameters, initOverrides);
    }

    /**
     */
    async fileApkGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/File/apk`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async fileApkGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.fileApkGetRaw(initOverrides);
    }

    /**
     */
    async fileProtectedTrackIdNameGetRaw(requestParameters: FileProtectedTrackIdNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling fileProtectedTrackIdNameGet.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling fileProtectedTrackIdNameGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.lastChanged !== undefined) {
            queryParameters['last-changed'] = requestParameters.lastChanged;
        }

        if (requestParameters.download !== undefined) {
            queryParameters['download'] = requestParameters.download;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/File/protected/track/{id}/{name}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async fileProtectedTrackIdNameGet(requestParameters: FileProtectedTrackIdNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.fileProtectedTrackIdNameGetRaw(requestParameters, initOverrides);
    }

    /**
     */
    async fileProtectedTypeIdNameGetRaw(requestParameters: FileProtectedTypeIdNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling fileProtectedTypeIdNameGet.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling fileProtectedTypeIdNameGet.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling fileProtectedTypeIdNameGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.lastChanged !== undefined) {
            queryParameters['last-changed'] = requestParameters.lastChanged;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/File/protected/{type}/{id}/{name}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters.type))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async fileProtectedTypeIdNameGet(requestParameters: FileProtectedTypeIdNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.fileProtectedTypeIdNameGetRaw(requestParameters, initOverrides);
    }

}
