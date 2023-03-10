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
  Podcast,
  PodcastCollection,
  PodcastModel,
  PublishedFilter,
  TrackListOverviewVmPodcast,
  TrackModel,
} from '../models';
import {
    PodcastFromJSON,
    PodcastToJSON,
    PodcastCollectionFromJSON,
    PodcastCollectionToJSON,
    PodcastModelFromJSON,
    PodcastModelToJSON,
    PublishedFilterFromJSON,
    PublishedFilterToJSON,
    TrackListOverviewVmPodcastFromJSON,
    TrackListOverviewVmPodcastToJSON,
    TrackModelFromJSON,
    TrackModelToJSON,
} from '../models';

export interface PodcastCollectionPutRequest {
    podcastCollection?: PodcastCollection;
}

export interface PodcastIdCoverGetRequest {
    id: number;
}

export interface PodcastIdCoverPostRequest {
    id: number;
    podcastId?: number;
    file?: Blob;
}

export interface PodcastIdCoverPutRequest {
    id: number;
    podcastId?: number;
    file?: Blob;
}

export interface PodcastIdDeleteRequest {
    id: number;
}

export interface PodcastIdGetRequest {
    id: number;
    raw?: boolean;
}

export interface PodcastIdPutRequest {
    id: number;
    podcast?: Podcast;
}

export interface PodcastIdRandomGetRequest {
    id: number;
}

export interface PodcastIdShuffleGetRequest {
    id: number;
    size?: number;
}

export interface PodcastIdTrackGetRequest {
    id: number;
    unpublished?: PublishedFilter;
    size?: number;
    from?: number;
}

export interface PodcastPostRequest {
    podcast?: Podcast;
}

/**
 * 
 */
export class PodcastApi extends runtime.BaseAPI {

    /**
     */
    async podcastCollectionPutRaw(requestParameters: PodcastCollectionPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/podcast/collection`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PodcastCollectionToJSON(requestParameters.podcastCollection),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async podcastCollectionPut(requestParameters: PodcastCollectionPutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.podcastCollectionPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async podcastGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PodcastModel>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/podcast`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PodcastModelFromJSON));
    }

    /**
     */
    async podcastGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PodcastModel>> {
        const response = await this.podcastGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async podcastIdCoverGetRaw(requestParameters: PodcastIdCoverGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling podcastIdCoverGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/podcast/{id}/cover`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async podcastIdCoverGet(requestParameters: PodcastIdCoverGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.podcastIdCoverGetRaw(requestParameters, initOverrides);
    }

    /**
     */
    async podcastIdCoverPostRaw(requestParameters: PodcastIdCoverPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling podcastIdCoverPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.podcastId !== undefined) {
            formParams.append('PodcastId', requestParameters.podcastId as any);
        }

        if (requestParameters.file !== undefined) {
            formParams.append('File', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/podcast/{id}/cover`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async podcastIdCoverPost(requestParameters: PodcastIdCoverPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.podcastIdCoverPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async podcastIdCoverPutRaw(requestParameters: PodcastIdCoverPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling podcastIdCoverPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.podcastId !== undefined) {
            formParams.append('PodcastId', requestParameters.podcastId as any);
        }

        if (requestParameters.file !== undefined) {
            formParams.append('File', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/podcast/{id}/cover`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async podcastIdCoverPut(requestParameters: PodcastIdCoverPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.podcastIdCoverPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async podcastIdDeleteRaw(requestParameters: PodcastIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling podcastIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/podcast/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async podcastIdDelete(requestParameters: PodcastIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.podcastIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async podcastIdGetRaw(requestParameters: PodcastIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Podcast>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling podcastIdGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.raw !== undefined) {
            queryParameters['raw'] = requestParameters.raw;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/podcast/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodcastFromJSON(jsonValue));
    }

    /**
     */
    async podcastIdGet(requestParameters: PodcastIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Podcast> {
        const response = await this.podcastIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async podcastIdPutRaw(requestParameters: PodcastIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling podcastIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/podcast/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PodcastToJSON(requestParameters.podcast),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async podcastIdPut(requestParameters: PodcastIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.podcastIdPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async podcastIdRandomGetRaw(requestParameters: PodcastIdRandomGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling podcastIdRandomGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/podcast/{id}/random`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackModelFromJSON(jsonValue));
    }

    /**
     */
    async podcastIdRandomGet(requestParameters: PodcastIdRandomGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackModel> {
        const response = await this.podcastIdRandomGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async podcastIdShuffleGetRaw(requestParameters: PodcastIdShuffleGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TrackModel>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling podcastIdShuffleGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/podcast/{id}/shuffle`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TrackModelFromJSON));
    }

    /**
     */
    async podcastIdShuffleGet(requestParameters: PodcastIdShuffleGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TrackModel>> {
        const response = await this.podcastIdShuffleGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async podcastIdTrackGetRaw(requestParameters: PodcastIdTrackGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TrackModel>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling podcastIdTrackGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.unpublished !== undefined) {
            queryParameters['unpublished'] = requestParameters.unpublished;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/podcast/{id}/track`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TrackModelFromJSON));
    }

    /**
     */
    async podcastIdTrackGet(requestParameters: PodcastIdTrackGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TrackModel>> {
        const response = await this.podcastIdTrackGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async podcastOverviewGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackListOverviewVmPodcast>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/podcast/overview`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackListOverviewVmPodcastFromJSON(jsonValue));
    }

    /**
     */
    async podcastOverviewGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackListOverviewVmPodcast> {
        const response = await this.podcastOverviewGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async podcastPostRaw(requestParameters: PodcastPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/podcast`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PodcastToJSON(requestParameters.podcast),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async podcastPost(requestParameters: PodcastPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.podcastPostRaw(requestParameters, initOverrides);
    }

}
