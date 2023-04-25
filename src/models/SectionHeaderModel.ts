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
 * @interface SectionHeaderModel
 */
export interface SectionHeaderModel {
    /**
     * 
     * @type {string}
     * @memberof SectionHeaderModel
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SectionHeaderModel
     */
    translationParent?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SectionHeaderModel
     */
    translationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SectionHeaderModel
     */
    link?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SectionHeaderModel
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SectionHeaderModel
     */
    useCoverCarousel?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SectionHeaderModel
     */
    readonly type?: string | null;
}

/**
 * Check if a given object implements the SectionHeaderModel interface.
 */
export function instanceOfSectionHeaderModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SectionHeaderModelFromJSON(json: any): SectionHeaderModel {
    return SectionHeaderModelFromJSONTyped(json, false);
}

export function SectionHeaderModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SectionHeaderModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'translationParent': !exists(json, 'translation_parent') ? undefined : json['translation_parent'],
        'translationId': !exists(json, 'translation_id') ? undefined : json['translation_id'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'useCoverCarousel': !exists(json, 'use_cover_carousel') ? undefined : json['use_cover_carousel'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function SectionHeaderModelToJSON(value?: SectionHeaderModel | null): any {
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
        'link': value.link,
        'id': value.id,
        'use_cover_carousel': value.useCoverCarousel,
    };
}

