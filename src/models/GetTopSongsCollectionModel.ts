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

import { exists, mapValues } from '../runtime';
import type { GetTopSongsCollectionModelTrackAndCount } from './GetTopSongsCollectionModelTrackAndCount';
import {
    GetTopSongsCollectionModelTrackAndCountFromJSON,
    GetTopSongsCollectionModelTrackAndCountFromJSONTyped,
    GetTopSongsCollectionModelTrackAndCountToJSON,
} from './GetTopSongsCollectionModelTrackAndCount';

/**
 * 
 * @export
 * @interface GetTopSongsCollectionModel
 */
export interface GetTopSongsCollectionModel {
    /**
     * 
     * @type {string}
     * @memberof GetTopSongsCollectionModel
     */
    readonly type: GetTopSongsCollectionModelTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof GetTopSongsCollectionModel
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof GetTopSongsCollectionModel
     */
    pageTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTopSongsCollectionModel
     */
    name?: string | null;
    /**
     * 
     * @type {Array<GetTopSongsCollectionModelTrackAndCount>}
     * @memberof GetTopSongsCollectionModel
     */
    tracks?: Array<GetTopSongsCollectionModelTrackAndCount> | null;
}


/**
 * @export
 */
export const GetTopSongsCollectionModelTypeEnum = {
    TopSongsCollection: 'top_songs_collection'
} as const;
export type GetTopSongsCollectionModelTypeEnum = typeof GetTopSongsCollectionModelTypeEnum[keyof typeof GetTopSongsCollectionModelTypeEnum];


/**
 * Check if a given object implements the GetTopSongsCollectionModel interface.
 */
export function instanceOfGetTopSongsCollectionModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GetTopSongsCollectionModelFromJSON(json: any): GetTopSongsCollectionModel {
    return GetTopSongsCollectionModelFromJSONTyped(json, false);
}

export function GetTopSongsCollectionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTopSongsCollectionModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'pageTitle': !exists(json, 'page_title') ? undefined : json['page_title'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tracks': !exists(json, 'tracks') ? undefined : (json['tracks'] === null ? null : (json['tracks'] as Array<any>).map(GetTopSongsCollectionModelTrackAndCountFromJSON)),
    };
}

export function GetTopSongsCollectionModelToJSON(value?: GetTopSongsCollectionModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'page_title': value.pageTitle,
        'name': value.name,
        'tracks': value.tracks === undefined ? undefined : (value.tracks === null ? null : (value.tracks as Array<any>).map(GetTopSongsCollectionModelTrackAndCountToJSON)),
    };
}

