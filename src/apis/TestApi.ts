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
  TestResponse,
  TrackSubtype,
} from '../models';
import {
    TestResponseFromJSON,
    TestResponseToJSON,
    TrackSubtypeFromJSON,
    TrackSubtypeToJSON,
} from '../models';

export interface TestGetRequest {
    content?: Array<string>;
    contentType?: Array<string>;
    from?: number;
    variable?: string;
    subtype?: Array<TrackSubtype>;
}

export interface TestWithobjectGetRequest {
    from?: number;
    variable?: string;
    subtype?: Array<TrackSubtype>;
}

/**
 * 
 */
export class TestApi extends runtime.BaseAPI {

    /**
     */
    async testGetRaw(requestParameters: TestGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TestResponse>> {
        const queryParameters: any = {};

        if (requestParameters.content) {
            queryParameters['content'] = requestParameters.content;
        }

        if (requestParameters.contentType) {
            queryParameters['content-type'] = requestParameters.contentType;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.variable !== undefined) {
            queryParameters['variable'] = requestParameters.variable;
        }

        if (requestParameters.subtype) {
            queryParameters['subtype'] = requestParameters.subtype;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TestResponseFromJSON(jsonValue));
    }

    /**
     */
    async testGet(requestParameters: TestGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TestResponse> {
        const response = await this.testGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async testWithobjectGetRaw(requestParameters: TestWithobjectGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TestResponse>> {
        const queryParameters: any = {};

        if (requestParameters.from !== undefined) {
            queryParameters['From'] = requestParameters.from;
        }

        if (requestParameters.variable !== undefined) {
            queryParameters['Variable'] = requestParameters.variable;
        }

        if (requestParameters.subtype) {
            queryParameters['Subtype'] = requestParameters.subtype;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test/withobject`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TestResponseFromJSON(jsonValue));
    }

    /**
     */
    async testWithobjectGet(requestParameters: TestWithobjectGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TestResponse> {
        const response = await this.testWithobjectGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}