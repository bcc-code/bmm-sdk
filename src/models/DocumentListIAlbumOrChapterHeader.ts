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
import type { IAlbumOrChapterHeader } from './IAlbumOrChapterHeader';
import {
    IAlbumOrChapterHeaderFromJSON,
    IAlbumOrChapterHeaderFromJSONTyped,
    IAlbumOrChapterHeaderToJSON,
} from './IAlbumOrChapterHeader';

/**
 * 
 * @export
 * @interface DocumentListIAlbumOrChapterHeader
 */
export interface DocumentListIAlbumOrChapterHeader {
    /**
     * 
     * @type {string}
     * @memberof DocumentListIAlbumOrChapterHeader
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentListIAlbumOrChapterHeader
     * @deprecated
     */
    translationParent?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentListIAlbumOrChapterHeader
     * @deprecated
     */
    translationId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentListIAlbumOrChapterHeader
     */
    supportsPaging?: boolean;
    /**
     * 
     * @type {Array<IAlbumOrChapterHeader>}
     * @memberof DocumentListIAlbumOrChapterHeader
     */
    items?: Array<IAlbumOrChapterHeader> | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentListIAlbumOrChapterHeader
     */
    totalItems?: number;
}

/**
 * Check if a given object implements the DocumentListIAlbumOrChapterHeader interface.
 */
export function instanceOfDocumentListIAlbumOrChapterHeader(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocumentListIAlbumOrChapterHeaderFromJSON(json: any): DocumentListIAlbumOrChapterHeader {
    return DocumentListIAlbumOrChapterHeaderFromJSONTyped(json, false);
}

export function DocumentListIAlbumOrChapterHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentListIAlbumOrChapterHeader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'translationParent': !exists(json, 'translation_parent') ? undefined : json['translation_parent'],
        'translationId': !exists(json, 'translation_id') ? undefined : json['translation_id'],
        'supportsPaging': !exists(json, 'supports_paging') ? undefined : json['supports_paging'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(IAlbumOrChapterHeaderFromJSON)),
        'totalItems': !exists(json, 'total_items') ? undefined : json['total_items'],
    };
}

export function DocumentListIAlbumOrChapterHeaderToJSON(value?: DocumentListIAlbumOrChapterHeader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'translation_parent': value.translationParent,
        'translation_id': value.translationId,
        'supports_paging': value.supportsPaging,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(IAlbumOrChapterHeaderToJSON)),
        'total_items': value.totalItems,
    };
}

