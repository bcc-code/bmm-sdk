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
import type { TrackModel } from './TrackModel';
import {
    TrackModelFromJSON,
    TrackModelFromJSONTyped,
    TrackModelToJSON,
} from './TrackModel';

/**
 * 
 * @export
 * @interface GetTrackCollectionModel
 */
export interface GetTrackCollectionModel {
    /**
     * 
     * @type {string}
     * @memberof GetTrackCollectionModel
     */
    readonly type: string;
    /**
     * 
     * @type {number}
     * @memberof GetTrackCollectionModel
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof GetTrackCollectionModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTrackCollectionModel
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GetTrackCollectionModel
     */
    followerCount?: number;
    /**
     * 
     * @type {string}
     * @memberof GetTrackCollectionModel
     */
    shareLink?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTrackCollectionModel
     */
    authorName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GetTrackCollectionModel
     */
    canEdit?: boolean;
    /**
     * 
     * @type {Array<TrackModel>}
     * @memberof GetTrackCollectionModel
     */
    tracks?: Array<TrackModel> | null;
    /**
     * 
     * @type {boolean}
     * @memberof GetTrackCollectionModel
     */
    useLikeIcon?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetTrackCollectionModel
     */
    trackCount: number;
    /**
     * 
     * @type {number}
     * @memberof GetTrackCollectionModel
     */
    totalSeconds: number;
}

/**
 * Check if a given object implements the GetTrackCollectionModel interface.
 */
export function instanceOfGetTrackCollectionModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "trackCount" in value;
    isInstance = isInstance && "totalSeconds" in value;

    return isInstance;
}

export function GetTrackCollectionModelFromJSON(json: any): GetTrackCollectionModel {
    return GetTrackCollectionModelFromJSONTyped(json, false);
}

export function GetTrackCollectionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTrackCollectionModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'followerCount': !exists(json, 'follower_count') ? undefined : json['follower_count'],
        'shareLink': !exists(json, 'share_link') ? undefined : json['share_link'],
        'authorName': !exists(json, 'author_name') ? undefined : json['author_name'],
        'canEdit': !exists(json, 'can_edit') ? undefined : json['can_edit'],
        'tracks': !exists(json, 'tracks') ? undefined : (json['tracks'] === null ? null : (json['tracks'] as Array<any>).map(TrackModelFromJSON)),
        'useLikeIcon': !exists(json, 'use_like_icon') ? undefined : json['use_like_icon'],
        'trackCount': json['track_count'],
        'totalSeconds': json['total_seconds'],
    };
}

export function GetTrackCollectionModelToJSON(value?: GetTrackCollectionModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'follower_count': value.followerCount,
        'share_link': value.shareLink,
        'author_name': value.authorName,
        'can_edit': value.canEdit,
        'tracks': value.tracks === undefined ? undefined : (value.tracks === null ? null : (value.tracks as Array<any>).map(TrackModelToJSON)),
        'use_like_icon': value.useLikeIcon,
        'track_count': value.trackCount,
        'total_seconds': value.totalSeconds,
    };
}

