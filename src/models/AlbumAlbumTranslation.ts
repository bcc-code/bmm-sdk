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
import type { AlbumTranslationMeta } from './AlbumTranslationMeta';
import {
    AlbumTranslationMetaFromJSON,
    AlbumTranslationMetaFromJSONTyped,
    AlbumTranslationMetaToJSON,
} from './AlbumTranslationMeta';
import type { LanguageEnum } from './LanguageEnum';
import {
    LanguageEnumFromJSON,
    LanguageEnumFromJSONTyped,
    LanguageEnumToJSON,
} from './LanguageEnum';

/**
 * 
 * @export
 * @interface AlbumAlbumTranslation
 */
export interface AlbumAlbumTranslation {
    /**
     * 
     * @type {AlbumTranslationMeta}
     * @memberof AlbumAlbumTranslation
     */
    meta?: AlbumTranslationMeta;
    /**
     * 
     * @type {boolean}
     * @memberof AlbumAlbumTranslation
     */
    isVisible?: boolean;
    /**
     * 
     * @type {LanguageEnum}
     * @memberof AlbumAlbumTranslation
     */
    language?: LanguageEnum;
    /**
     * 
     * @type {string}
     * @memberof AlbumAlbumTranslation
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AlbumAlbumTranslation
     */
    description?: string | null;
}

/**
 * Check if a given object implements the AlbumAlbumTranslation interface.
 */
export function instanceOfAlbumAlbumTranslation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlbumAlbumTranslationFromJSON(json: any): AlbumAlbumTranslation {
    return AlbumAlbumTranslationFromJSONTyped(json, false);
}

export function AlbumAlbumTranslationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlbumAlbumTranslation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': !exists(json, 'meta') ? undefined : AlbumTranslationMetaFromJSON(json['meta']),
        'isVisible': !exists(json, 'isVisible') ? undefined : json['isVisible'],
        'language': !exists(json, 'language') ? undefined : LanguageEnumFromJSON(json['language']),
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function AlbumAlbumTranslationToJSON(value?: AlbumAlbumTranslation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': AlbumTranslationMetaToJSON(value.meta),
        'isVisible': value.isVisible,
        'language': LanguageEnumToJSON(value.language),
        'title': value.title,
        'description': value.description,
    };
}

