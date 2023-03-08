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
import type { TrackRelation } from './TrackRelation';
import {
    TrackRelationFromJSON,
    TrackRelationFromJSONTyped,
    TrackRelationToJSON,
} from './TrackRelation';
import type { TrackSubtype } from './TrackSubtype';
import {
    TrackSubtypeFromJSON,
    TrackSubtypeFromJSONTyped,
    TrackSubtypeToJSON,
} from './TrackSubtype';
import type { TrackTrackMeta } from './TrackTrackMeta';
import {
    TrackTrackMetaFromJSON,
    TrackTrackMetaFromJSONTyped,
    TrackTrackMetaToJSON,
} from './TrackTrackMeta';
import type { TrackTranslation } from './TrackTranslation';
import {
    TrackTranslationFromJSON,
    TrackTranslationFromJSONTyped,
    TrackTranslationToJSON,
} from './TrackTranslation';

/**
 * 
 * @export
 * @interface Track
 */
export interface Track {
    /**
     * 
     * @type {string}
     * @memberof Track
     */
    comment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Track
     */
    mediabankenId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Track
     */
    cover?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Track
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Track
     */
    readonly idString?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Track
     */
    isVisible?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Track
     */
    order?: number;
    /**
     * 
     * @type {LanguageEnum}
     * @memberof Track
     */
    originalLanguage?: LanguageEnum;
    /**
     * 
     * @type {number}
     * @memberof Track
     */
    parentId?: number;
    /**
     * 
     * @type {Date}
     * @memberof Track
     */
    publishedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Track
     */
    recordedAt?: Date;
    /**
     * 
     * @type {Array<TrackRelation>}
     * @memberof Track
     */
    rel?: Array<TrackRelation> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Track
     */
    readonly songBooks?: Array<string> | null;
    /**
     * 
     * @type {TrackSubtype}
     * @memberof Track
     */
    subtype?: TrackSubtype;
    /**
     * 
     * @type {Array<string>}
     * @memberof Track
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {Array<TrackTranslation>}
     * @memberof Track
     */
    translations?: Array<TrackTranslation> | null;
    /**
     * 
     * @type {Array<TrackTranslation>}
     * @memberof Track
     */
    readonly translationsWithMedia?: Array<TrackTranslation> | null;
    /**
     * 
     * @type {Array<TrackTranslation>}
     * @memberof Track
     */
    readonly translationsWithPublishedMedia?: Array<TrackTranslation> | null;
    /**
     * 
     * @type {string}
     * @memberof Track
     */
    readonly type?: string | null;
    /**
     * 
     * @type {TrackTrackMeta}
     * @memberof Track
     */
    meta?: TrackTrackMeta;
    /**
     * 
     * @type {boolean}
     * @memberof Track
     */
    readonly isDocumentPublished?: boolean;
    /**
     * 
     * @type {any}
     * @memberof Track
     */
    compressed?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof Track
     */
    readonly modifiedAt?: Date;
}

/**
 * Check if a given object implements the Track interface.
 */
export function instanceOfTrack(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackFromJSON(json: any): Track {
    return TrackFromJSONTyped(json, false);
}

export function TrackFromJSONTyped(json: any, ignoreDiscriminator: boolean): Track {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'mediabankenId': !exists(json, 'mediabankenId') ? undefined : json['mediabankenId'],
        'cover': !exists(json, 'cover') ? undefined : json['cover'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idString': !exists(json, 'idString') ? undefined : json['idString'],
        'isVisible': !exists(json, 'isVisible') ? undefined : json['isVisible'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'originalLanguage': !exists(json, 'originalLanguage') ? undefined : LanguageEnumFromJSON(json['originalLanguage']),
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'publishedAt': !exists(json, 'publishedAt') ? undefined : (new Date(json['publishedAt'])),
        'recordedAt': !exists(json, 'recordedAt') ? undefined : (new Date(json['recordedAt'])),
        'rel': !exists(json, 'rel') ? undefined : (json['rel'] === null ? null : (json['rel'] as Array<any>).map(TrackRelationFromJSON)),
        'songBooks': !exists(json, 'songBooks') ? undefined : json['songBooks'],
        'subtype': !exists(json, 'subtype') ? undefined : TrackSubtypeFromJSON(json['subtype']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'translations': !exists(json, 'translations') ? undefined : (json['translations'] === null ? null : (json['translations'] as Array<any>).map(TrackTranslationFromJSON)),
        'translationsWithMedia': !exists(json, 'translationsWithMedia') ? undefined : (json['translationsWithMedia'] === null ? null : (json['translationsWithMedia'] as Array<any>).map(TrackTranslationFromJSON)),
        'translationsWithPublishedMedia': !exists(json, 'translationsWithPublishedMedia') ? undefined : (json['translationsWithPublishedMedia'] === null ? null : (json['translationsWithPublishedMedia'] as Array<any>).map(TrackTranslationFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'meta': !exists(json, 'meta') ? undefined : TrackTrackMetaFromJSON(json['meta']),
        'isDocumentPublished': !exists(json, 'isDocumentPublished') ? undefined : json['isDocumentPublished'],
        'compressed': !exists(json, 'compressed') ? undefined : json['compressed'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
    };
}

export function TrackToJSON(value?: Track | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment': value.comment,
        'mediabankenId': value.mediabankenId,
        'cover': value.cover,
        'id': value.id,
        'isVisible': value.isVisible,
        'order': value.order,
        'originalLanguage': LanguageEnumToJSON(value.originalLanguage),
        'parentId': value.parentId,
        'publishedAt': value.publishedAt === undefined ? undefined : (value.publishedAt.toISOString()),
        'recordedAt': value.recordedAt === undefined ? undefined : (value.recordedAt.toISOString()),
        'rel': value.rel === undefined ? undefined : (value.rel === null ? null : (value.rel as Array<any>).map(TrackRelationToJSON)),
        'subtype': TrackSubtypeToJSON(value.subtype),
        'tags': value.tags,
        'translations': value.translations === undefined ? undefined : (value.translations === null ? null : (value.translations as Array<any>).map(TrackTranslationToJSON)),
        'meta': TrackTrackMetaToJSON(value.meta),
        'compressed': value.compressed,
    };
}
