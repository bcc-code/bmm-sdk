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
  AlbumYearFacetsQueryResult,
  PublishedFilter,
} from '../models/index';
import {
    AlbumYearFacetsQueryResultFromJSON,
    AlbumYearFacetsQueryResultToJSON,
    PublishedFilterFromJSON,
    PublishedFilterToJSON,
} from '../models/index';

export interface ControllerAlbumPublishedYearsGetRequest {
    controller: string;
    unpublished?: PublishedFilter;
}

/**
 * 
 */
export class FacetsApi extends runtime.BaseAPI {

    /**
     */
    async controllerAlbumPublishedYearsGetRaw(requestParameters: ControllerAlbumPublishedYearsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AlbumYearFacetsQueryResult>>> {
        if (requestParameters.controller === null || requestParameters.controller === undefined) {
            throw new runtime.RequiredError('controller','Required parameter requestParameters.controller was null or undefined when calling controllerAlbumPublishedYearsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.unpublished !== undefined) {
            queryParameters['unpublished'] = requestParameters.unpublished;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{controller}/album_published/years`.replace(`{${"controller"}}`, encodeURIComponent(String(requestParameters.controller))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AlbumYearFacetsQueryResultFromJSON));
    }

    /**
     */
    async controllerAlbumPublishedYearsGet(requestParameters: ControllerAlbumPublishedYearsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AlbumYearFacetsQueryResult>> {
        const response = await this.controllerAlbumPublishedYearsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
