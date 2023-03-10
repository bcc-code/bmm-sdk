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
/**
 * 
 * @export
 * @interface AlbumAlbumMeta
 */
export interface AlbumAlbumMeta {
    /**
     * 
     * @type {Array<string>}
     * @memberof AlbumAlbumMeta
     */
    containedTypes?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof AlbumAlbumMeta
     */
    isVisible?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof AlbumAlbumMeta
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof AlbumAlbumMeta
     */
    modifiedBy?: string | null;
}

/**
 * Check if a given object implements the AlbumAlbumMeta interface.
 */
export function instanceOfAlbumAlbumMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlbumAlbumMetaFromJSON(json: any): AlbumAlbumMeta {
    return AlbumAlbumMetaFromJSONTyped(json, false);
}

export function AlbumAlbumMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlbumAlbumMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containedTypes': !exists(json, 'containedTypes') ? undefined : json['containedTypes'],
        'isVisible': !exists(json, 'isVisible') ? undefined : json['isVisible'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : json['modifiedBy'],
    };
}

export function AlbumAlbumMetaToJSON(value?: AlbumAlbumMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containedTypes': value.containedTypes,
        'isVisible': value.isVisible,
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'modifiedBy': value.modifiedBy,
    };
}

