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
import type { AlbumAlbumMeta } from './AlbumAlbumMeta';
import {
    AlbumAlbumMetaFromJSON,
    AlbumAlbumMetaFromJSONTyped,
    AlbumAlbumMetaToJSON,
} from './AlbumAlbumMeta';
import type { AlbumAlbumTranslation } from './AlbumAlbumTranslation';
import {
    AlbumAlbumTranslationFromJSON,
    AlbumAlbumTranslationFromJSONTyped,
    AlbumAlbumTranslationToJSON,
} from './AlbumAlbumTranslation';
import type { LanguageEnum } from './LanguageEnum';
import {
    LanguageEnumFromJSON,
    LanguageEnumFromJSONTyped,
    LanguageEnumToJSON,
} from './LanguageEnum';

/**
 * 
 * @export
 * @interface Album
 */
export interface Album {
    /**
     * 
     * @type {AlbumAlbumMeta}
     * @memberof Album
     */
    meta?: AlbumAlbumMeta;
    /**
     * 
     * @type {string}
     * @memberof Album
     */
    bmmId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Album
     */
    cover?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Album
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Album
     */
    readonly idString?: string | null;
    /**
     * 
     * @type {LanguageEnum}
     * @memberof Album
     */
    originalLanguage?: LanguageEnum;
    /**
     * 
     * @type {number}
     * @memberof Album
     */
    parentId?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof Album
     */
    publishedAt?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof Album
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {Array<AlbumAlbumTranslation>}
     * @memberof Album
     */
    translations?: Array<AlbumAlbumTranslation> | null;
    /**
     * 
     * @type {string}
     * @memberof Album
     */
    readonly type?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Album
     */
    readonly isDocumentPublished?: boolean;
    /**
     * 
     * @type {any}
     * @memberof Album
     */
    compressed?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof Album
     */
    readonly modifiedAt?: Date;
}

/**
 * Check if a given object implements the Album interface.
 */
export function instanceOfAlbum(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlbumFromJSON(json: any): Album {
    return AlbumFromJSONTyped(json, false);
}

export function AlbumFromJSONTyped(json: any, ignoreDiscriminator: boolean): Album {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': !exists(json, 'meta') ? undefined : AlbumAlbumMetaFromJSON(json['meta']),
        'bmmId': !exists(json, 'bmmId') ? undefined : json['bmmId'],
        'cover': !exists(json, 'cover') ? undefined : json['cover'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idString': !exists(json, 'idString') ? undefined : json['idString'],
        'originalLanguage': !exists(json, 'originalLanguage') ? undefined : LanguageEnumFromJSON(json['originalLanguage']),
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'publishedAt': !exists(json, 'publishedAt') ? undefined : (new Date(json['publishedAt'])),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'translations': !exists(json, 'translations') ? undefined : (json['translations'] === null ? null : (json['translations'] as Array<any>).map(AlbumAlbumTranslationFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'isDocumentPublished': !exists(json, 'isDocumentPublished') ? undefined : json['isDocumentPublished'],
        'compressed': !exists(json, 'compressed') ? undefined : json['compressed'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
    };
}

export function AlbumToJSON(value?: Album | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': AlbumAlbumMetaToJSON(value.meta),
        'bmmId': value.bmmId,
        'cover': value.cover,
        'id': value.id,
        'originalLanguage': LanguageEnumToJSON(value.originalLanguage),
        'parentId': value.parentId,
        'publishedAt': value.publishedAt === undefined ? undefined : (value.publishedAt.toISOString()),
        'tags': value.tags,
        'translations': value.translations === undefined ? undefined : (value.translations === null ? null : (value.translations as Array<any>).map(AlbumAlbumTranslationToJSON)),
        'compressed': value.compressed,
    };
}
