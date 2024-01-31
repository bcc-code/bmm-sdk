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
  ApiOverviewModel,
  StoreProjectQuestionQuestionHolder,
} from '../models/index';
import {
    ApiOverviewModelFromJSON,
    ApiOverviewModelToJSON,
    StoreProjectQuestionQuestionHolderFromJSON,
    StoreProjectQuestionQuestionHolderToJSON,
} from '../models/index';

export interface QuestionPostRequest {
    storeProjectQuestionQuestionHolder: StoreProjectQuestionQuestionHolder;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async loaderio2a7384d72124b249603cbda2fc74a801GetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/loaderio-2a7384d72124b249603cbda2fc74a801`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async loaderio2a7384d72124b249603cbda2fc74a801Get(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.loaderio2a7384d72124b249603cbda2fc74a801GetRaw(initOverrides);
    }

    /**
     */
    async questionPostRaw(requestParameters: QuestionPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.storeProjectQuestionQuestionHolder === null || requestParameters.storeProjectQuestionQuestionHolder === undefined) {
            throw new runtime.RequiredError('storeProjectQuestionQuestionHolder','Required parameter requestParameters.storeProjectQuestionQuestionHolder was null or undefined when calling questionPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/question`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StoreProjectQuestionQuestionHolderToJSON(requestParameters.storeProjectQuestionQuestionHolder),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async questionPost(requestParameters: QuestionPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.questionPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async rootGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiOverviewModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiOverviewModelFromJSON(jsonValue));
    }

    /**
     */
    async rootGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiOverviewModel> {
        const response = await this.rootGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async rootHeadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiOverviewModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'HEAD',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiOverviewModelFromJSON(jsonValue));
    }

    /**
     */
    async rootHead(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiOverviewModel> {
        const response = await this.rootHeadRaw(initOverrides);
        return await response.value();
    }

}
