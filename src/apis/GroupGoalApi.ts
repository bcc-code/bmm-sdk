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
  GroupGoalModel,
} from '../models';
import {
    GroupGoalModelFromJSON,
    GroupGoalModelToJSON,
} from '../models';

export interface GroupGoalIdSetupPostRequest {
    id: number;
}

export interface GroupGoalSharingSecretGetRequest {
    sharingSecret: string;
}

export interface GroupGoalSharingSecretJoinPostRequest {
    sharingSecret: string;
}

/**
 * 
 */
export class GroupGoalApi extends runtime.BaseAPI {

    /**
     */
    async groupGoalIdSetupPostRaw(requestParameters: GroupGoalIdSetupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupGoalIdSetupPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/GroupGoal/{id}/setup`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async groupGoalIdSetupPost(requestParameters: GroupGoalIdSetupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.groupGoalIdSetupPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async groupGoalReprocessPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/GroupGoal/reprocess`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async groupGoalReprocessPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.groupGoalReprocessPostRaw(initOverrides);
    }

    /**
     */
    async groupGoalSharingSecretGetRaw(requestParameters: GroupGoalSharingSecretGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupGoalModel>> {
        if (requestParameters.sharingSecret === null || requestParameters.sharingSecret === undefined) {
            throw new runtime.RequiredError('sharingSecret','Required parameter requestParameters.sharingSecret was null or undefined when calling groupGoalSharingSecretGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/GroupGoal/{sharingSecret}`.replace(`{${"sharingSecret"}}`, encodeURIComponent(String(requestParameters.sharingSecret))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupGoalModelFromJSON(jsonValue));
    }

    /**
     */
    async groupGoalSharingSecretGet(requestParameters: GroupGoalSharingSecretGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupGoalModel> {
        const response = await this.groupGoalSharingSecretGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async groupGoalSharingSecretJoinPostRaw(requestParameters: GroupGoalSharingSecretJoinPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sharingSecret === null || requestParameters.sharingSecret === undefined) {
            throw new runtime.RequiredError('sharingSecret','Required parameter requestParameters.sharingSecret was null or undefined when calling groupGoalSharingSecretJoinPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/GroupGoal/{sharingSecret}/join`.replace(`{${"sharingSecret"}}`, encodeURIComponent(String(requestParameters.sharingSecret))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async groupGoalSharingSecretJoinPost(requestParameters: GroupGoalSharingSecretJoinPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.groupGoalSharingSecretJoinPostRaw(requestParameters, initOverrides);
    }

}
