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
import type { TrackListReference } from './TrackListReference';
import {
    TrackListReferenceFromJSON,
    TrackListReferenceFromJSONTyped,
    TrackListReferenceToJSON,
} from './TrackListReference';

/**
 * 
 * @export
 * @interface PlaylistCollection
 */
export interface PlaylistCollection {
    /**
     * 
     * @type {string}
     * @memberof PlaylistCollection
     */
    type?: string | null;
    /**
     * 
     * @type {Array<TrackListReference>}
     * @memberof PlaylistCollection
     */
    references?: Array<TrackListReference> | null;
}

/**
 * Check if a given object implements the PlaylistCollection interface.
 */
export function instanceOfPlaylistCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlaylistCollectionFromJSON(json: any): PlaylistCollection {
    return PlaylistCollectionFromJSONTyped(json, false);
}

export function PlaylistCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaylistCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'references': !exists(json, 'references') ? undefined : (json['references'] === null ? null : (json['references'] as Array<any>).map(TrackListReferenceFromJSON)),
    };
}

export function PlaylistCollectionToJSON(value?: PlaylistCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'references': value.references === undefined ? undefined : (value.references === null ? null : (value.references as Array<any>).map(TrackListReferenceToJSON)),
    };
}

