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

import {
    AlbumModel,
    instanceOfAlbumModel,
    AlbumModelFromJSON,
    AlbumModelFromJSONTyped,
    AlbumModelToJSON,
} from './AlbumModel';
import {
    TrackModel,
    instanceOfTrackModel,
    TrackModelFromJSON,
    TrackModelFromJSONTyped,
    TrackModelToJSON,
} from './TrackModel';

/**
 * @type AlbumModelChildrenInner
 * 
 * @export
 */
export type AlbumModelChildrenInner = { type: 'album' } & AlbumModel | { type: 'track' } & TrackModel;

export function AlbumModelChildrenInnerFromJSON(json: any): AlbumModelChildrenInner {
    return AlbumModelChildrenInnerFromJSONTyped(json, false);
}

export function AlbumModelChildrenInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlbumModelChildrenInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'album':
            return {...AlbumModelFromJSONTyped(json, true), type: 'album'};
        case 'track':
            return {...TrackModelFromJSONTyped(json, true), type: 'track'};
        default:
            throw new Error(`No variant of AlbumModelChildrenInner exists with 'type=${json['type']}'`);
    }
}

export function AlbumModelChildrenInnerToJSON(value?: AlbumModelChildrenInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'album':
            return AlbumModelToJSON(value);
        case 'track':
            return TrackModelToJSON(value);
        default:
            throw new Error(`No variant of AlbumModelChildrenInner exists with 'type=${value['type']}'`);
    }

}

