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
  AppDownloadLinksQueryDownloadLinks,
} from '../models/index';
import {
    AppDownloadLinksQueryDownloadLinksFromJSON,
    AppDownloadLinksQueryDownloadLinksToJSON,
} from '../models/index';

/**
 * 
 */
export class DownloadLinksApi extends runtime.BaseAPI {

    /**
     */
    async downloadLinksGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDownloadLinksQueryDownloadLinks>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/download-links`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppDownloadLinksQueryDownloadLinksFromJSON(jsonValue));
    }

    /**
     */
    async downloadLinksGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDownloadLinksQueryDownloadLinks> {
        const response = await this.downloadLinksGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async downloadLinksWindowsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/download-links/windows`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async downloadLinksWindowsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downloadLinksWindowsGetRaw(initOverrides);
    }

}
