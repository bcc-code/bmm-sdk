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
  HandleBccmAnswerCommandBccmAnswer,
  QuestionModel,
  StoreQuestionResponseCommand,
} from '../models/index';
import {
    HandleBccmAnswerCommandBccmAnswerFromJSON,
    HandleBccmAnswerCommandBccmAnswerToJSON,
    QuestionModelFromJSON,
    QuestionModelToJSON,
    StoreQuestionResponseCommandFromJSON,
    StoreQuestionResponseCommandToJSON,
} from '../models/index';

export interface QuestionAnswersPostRequest {
    handleBccmAnswerCommandBccmAnswer: Array<HandleBccmAnswerCommandBccmAnswer>;
}

export interface QuestionIdGetRequest {
    id: number;
}

export interface QuestionIdPostRequest {
    id: number;
    storeQuestionResponseCommand?: StoreQuestionResponseCommand;
}

/**
 * 
 */
export class QuestionApi extends runtime.BaseAPI {

    /**
     */
    async questionAnswersPostRaw(requestParameters: QuestionAnswersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.handleBccmAnswerCommandBccmAnswer === null || requestParameters.handleBccmAnswerCommandBccmAnswer === undefined) {
            throw new runtime.RequiredError('handleBccmAnswerCommandBccmAnswer','Required parameter requestParameters.handleBccmAnswerCommandBccmAnswer was null or undefined when calling questionAnswersPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/question/answers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.handleBccmAnswerCommandBccmAnswer.map(HandleBccmAnswerCommandBccmAnswerToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async questionAnswersPost(requestParameters: QuestionAnswersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.questionAnswersPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async questionIdGetRaw(requestParameters: QuestionIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuestionModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling questionIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/question/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuestionModelFromJSON(jsonValue));
    }

    /**
     */
    async questionIdGet(requestParameters: QuestionIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuestionModel> {
        const response = await this.questionIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async questionIdPostRaw(requestParameters: QuestionIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling questionIdPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/question/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StoreQuestionResponseCommandToJSON(requestParameters.storeQuestionResponseCommand),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async questionIdPost(requestParameters: QuestionIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.questionIdPostRaw(requestParameters, initOverrides);
    }

}
