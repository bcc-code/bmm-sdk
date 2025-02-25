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
  HvheControllerHvheStatus,
} from '../models/index';
import {
    HvheControllerHvheStatusFromJSON,
    HvheControllerHvheStatusToJSON,
} from '../models/index';

/**
 * 
 */
export class HvheApi extends runtime.BaseAPI {

    /**
     */
    async gamenightPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/gamenight`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gamenightPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gamenightPostRaw(initOverrides);
    }

    /**
     */
    async notificationsPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/notifications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async notificationsPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.notificationsPostRaw(initOverrides);
    }

    /**
     */
    async statusGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HvheControllerHvheStatus>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HvheControllerHvheStatusFromJSON(jsonValue));
    }

    /**
     */
    async statusGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HvheControllerHvheStatus> {
        const response = await this.statusGetRaw(initOverrides);
        return await response.value();
    }

}
