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
  IDocumentModel,
  PublishedFilter,
  ResourceType,
  SearchFilter,
  SearchResults,
} from '../models';
import {
    IDocumentModelFromJSON,
    IDocumentModelToJSON,
    PublishedFilterFromJSON,
    PublishedFilterToJSON,
    ResourceTypeFromJSON,
    ResourceTypeToJSON,
    SearchFilterFromJSON,
    SearchFilterToJSON,
    SearchResultsFromJSON,
    SearchResultsToJSON,
} from '../models';

export interface SearchTermGetRequest {
    term: string;
    resourceType?: Array<ResourceType>;
    publishedFilter?: PublishedFilter;
    size?: number;
    from?: number;
}

export interface SearchV2TermGetRequest {
    term: string;
    filter?: SearchFilter;
    publishedFilter?: PublishedFilter;
    size?: number;
    from?: number;
}

export interface TextsearchTermGetRequest {
    term: string;
    resourceType?: Array<ResourceType>;
    publishedFilter?: PublishedFilter;
    size?: number;
    from?: number;
}

export interface TextsearchV2TermGetRequest {
    term: string;
    filter?: SearchFilter;
    publishedFilter?: PublishedFilter;
    size?: number;
    from?: number;
}

/**
 * 
 */
export class SearchApi extends runtime.BaseAPI {

    /**
     */
    async searchTermGetRaw(requestParameters: SearchTermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<IDocumentModel>>> {
        if (requestParameters.term === null || requestParameters.term === undefined) {
            throw new runtime.RequiredError('term','Required parameter requestParameters.term was null or undefined when calling searchTermGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.resourceType) {
            queryParameters['resource-type'] = requestParameters.resourceType;
        }

        if (requestParameters.publishedFilter !== undefined) {
            queryParameters['publishedFilter'] = requestParameters.publishedFilter;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Search/{term}`.replace(`{${"term"}}`, encodeURIComponent(String(requestParameters.term))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IDocumentModelFromJSON));
    }

    /**
     */
    async searchTermGet(requestParameters: SearchTermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<IDocumentModel>> {
        const response = await this.searchTermGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async searchV2TermGetRaw(requestParameters: SearchV2TermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchResults>> {
        if (requestParameters.term === null || requestParameters.term === undefined) {
            throw new runtime.RequiredError('term','Required parameter requestParameters.term was null or undefined when calling searchV2TermGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.publishedFilter !== undefined) {
            queryParameters['publishedFilter'] = requestParameters.publishedFilter;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Search/v2/{term}`.replace(`{${"term"}}`, encodeURIComponent(String(requestParameters.term))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchResultsFromJSON(jsonValue));
    }

    /**
     */
    async searchV2TermGet(requestParameters: SearchV2TermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchResults> {
        const response = await this.searchV2TermGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async textsearchTermGetRaw(requestParameters: TextsearchTermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<IDocumentModel>>> {
        if (requestParameters.term === null || requestParameters.term === undefined) {
            throw new runtime.RequiredError('term','Required parameter requestParameters.term was null or undefined when calling textsearchTermGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.resourceType) {
            queryParameters['resource-type'] = requestParameters.resourceType;
        }

        if (requestParameters.publishedFilter !== undefined) {
            queryParameters['publishedFilter'] = requestParameters.publishedFilter;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/textsearch/{term}`.replace(`{${"term"}}`, encodeURIComponent(String(requestParameters.term))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IDocumentModelFromJSON));
    }

    /**
     */
    async textsearchTermGet(requestParameters: TextsearchTermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<IDocumentModel>> {
        const response = await this.textsearchTermGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async textsearchV2TermGetRaw(requestParameters: TextsearchV2TermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchResults>> {
        if (requestParameters.term === null || requestParameters.term === undefined) {
            throw new runtime.RequiredError('term','Required parameter requestParameters.term was null or undefined when calling textsearchV2TermGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.publishedFilter !== undefined) {
            queryParameters['publishedFilter'] = requestParameters.publishedFilter;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/textsearch/v2/{term}`.replace(`{${"term"}}`, encodeURIComponent(String(requestParameters.term))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchResultsFromJSON(jsonValue));
    }

    /**
     */
    async textsearchV2TermGet(requestParameters: TextsearchV2TermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchResults> {
        const response = await this.textsearchV2TermGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}