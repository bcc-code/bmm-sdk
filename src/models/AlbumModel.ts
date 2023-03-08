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
import type { AlbumModelAlbumMeta } from './AlbumModelAlbumMeta';
import {
    AlbumModelAlbumMetaFromJSON,
    AlbumModelAlbumMetaFromJSONTyped,
    AlbumModelAlbumMetaToJSON,
} from './AlbumModelAlbumMeta';
import type { IDocumentModel } from './IDocumentModel';
import {
    IDocumentModelFromJSON,
    IDocumentModelFromJSONTyped,
    IDocumentModelToJSON,
} from './IDocumentModel';
import type { LanguageEnum } from './LanguageEnum';
import {
    LanguageEnumFromJSON,
    LanguageEnumFromJSONTyped,
    LanguageEnumToJSON,
} from './LanguageEnum';

/**
 * 
 * @export
 * @interface AlbumModel
 */
export interface AlbumModel {
    /**
     * 
     * @type {AlbumModelAlbumMeta}
     * @memberof AlbumModel
     */
    meta?: AlbumModelAlbumMeta;
    /**
     * 
     * @type {string}
     * @memberof AlbumModel
     */
    bmmId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlbumModel
     */
    cover?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AlbumModel
     */
    id?: number;
    /**
     * 
     * @type {Array<LanguageEnum>}
     * @memberof AlbumModel
     */
    languages?: Array<LanguageEnum> | null;
    /**
     * 
     * @type {number}
     * @memberof AlbumModel
     */
    parentId?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof AlbumModel
     */
    publishedAt?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof AlbumModel
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {LanguageEnum}
     * @memberof AlbumModel
     */
    language?: LanguageEnum;
    /**
     * 
     * @type {string}
     * @memberof AlbumModel
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlbumModel
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlbumModel
     */
    readonly type?: string | null;
    /**
     * 
     * @type {Array<IDocumentModel>}
     * @memberof AlbumModel
     */
    children?: Array<IDocumentModel> | null;
    /**
     * 
     * @type {number}
     * @memberof AlbumModel
     */
    latestTrackId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AlbumModel
     */
    latestTrackPosition?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AlbumModel
     */
    readonly year?: number;
}

/**
 * Check if a given object implements the AlbumModel interface.
 */
export function instanceOfAlbumModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlbumModelFromJSON(json: any): AlbumModel {
    return AlbumModelFromJSONTyped(json, false);
}

export function AlbumModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlbumModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': !exists(json, 'meta') ? undefined : AlbumModelAlbumMetaFromJSON(json['meta']),
        'bmmId': !exists(json, 'bmmId') ? undefined : json['bmmId'],
        'cover': !exists(json, 'cover') ? undefined : json['cover'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'languages': !exists(json, 'languages') ? undefined : (json['languages'] === null ? null : (json['languages'] as Array<any>).map(LanguageEnumFromJSON)),
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'publishedAt': !exists(json, 'publishedAt') ? undefined : (new Date(json['publishedAt'])),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'language': !exists(json, 'language') ? undefined : LanguageEnumFromJSON(json['language']),
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'children': !exists(json, 'children') ? undefined : (json['children'] === null ? null : (json['children'] as Array<any>).map(IDocumentModelFromJSON)),
        'latestTrackId': !exists(json, 'latestTrackId') ? undefined : json['latestTrackId'],
        'latestTrackPosition': !exists(json, 'latestTrackPosition') ? undefined : json['latestTrackPosition'],
        'year': !exists(json, 'year') ? undefined : json['year'],
    };
}

export function AlbumModelToJSON(value?: AlbumModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': AlbumModelAlbumMetaToJSON(value.meta),
        'bmmId': value.bmmId,
        'cover': value.cover,
        'id': value.id,
        'languages': value.languages === undefined ? undefined : (value.languages === null ? null : (value.languages as Array<any>).map(LanguageEnumToJSON)),
        'parentId': value.parentId,
        'publishedAt': value.publishedAt === undefined ? undefined : (value.publishedAt.toISOString()),
        'tags': value.tags,
        'language': LanguageEnumToJSON(value.language),
        'title': value.title,
        'description': value.description,
        'children': value.children === undefined ? undefined : (value.children === null ? null : (value.children as Array<any>).map(IDocumentModelToJSON)),
        'latestTrackId': value.latestTrackId,
        'latestTrackPosition': value.latestTrackPosition,
    };
}
