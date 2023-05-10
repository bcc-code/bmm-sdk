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
import type { LanguageEnum } from './LanguageEnum';
import {
    LanguageEnumFromJSON,
    LanguageEnumFromJSONTyped,
    LanguageEnumToJSON,
} from './LanguageEnum';

/**
 * 
 * @export
 * @interface PlaylistModel
 */
export interface PlaylistModel {
    /**
     * 
     * @type {string}
     * @memberof PlaylistModel
     */
    cover?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PlaylistModel
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof PlaylistModel
     */
    readonly type: PlaylistModelTypeEnum;
    /**
     * 
     * @type {Array<LanguageEnum>}
     * @memberof PlaylistModel
     */
    languages?: Array<LanguageEnum> | null;
    /**
     * 
     * @type {LanguageEnum}
     * @memberof PlaylistModel
     */
    language?: LanguageEnum;
    /**
     * 
     * @type {string}
     * @memberof PlaylistModel
     */
    title?: string | null;
}


/**
 * @export
 */
export const PlaylistModelTypeEnum = {
    Playlist: 'playlist'
} as const;
export type PlaylistModelTypeEnum = typeof PlaylistModelTypeEnum[keyof typeof PlaylistModelTypeEnum];


/**
 * Check if a given object implements the PlaylistModel interface.
 */
export function instanceOfPlaylistModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function PlaylistModelFromJSON(json: any): PlaylistModel {
    return PlaylistModelFromJSONTyped(json, false);
}

export function PlaylistModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaylistModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cover': !exists(json, 'cover') ? undefined : json['cover'],
        'id': json['id'],
        'type': json['type'],
        'languages': !exists(json, 'languages') ? undefined : (json['languages'] === null ? null : (json['languages'] as Array<any>).map(LanguageEnumFromJSON)),
        'language': !exists(json, 'language') ? undefined : LanguageEnumFromJSON(json['language']),
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function PlaylistModelToJSON(value?: PlaylistModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cover': value.cover,
        'id': value.id,
        'languages': value.languages === undefined ? undefined : (value.languages === null ? null : (value.languages as Array<any>).map(LanguageEnumToJSON)),
        'language': LanguageEnumToJSON(value.language),
        'title': value.title,
    };
}

