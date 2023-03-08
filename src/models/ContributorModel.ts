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
import type { ContributorContributorMeta } from './ContributorContributorMeta';
import {
    ContributorContributorMetaFromJSON,
    ContributorContributorMetaFromJSONTyped,
    ContributorContributorMetaToJSON,
} from './ContributorContributorMeta';

/**
 * 
 * @export
 * @interface ContributorModel
 */
export interface ContributorModel {
    /**
     * 
     * @type {number}
     * @memberof ContributorModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ContributorModel
     */
    readonly type?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ContributorModel
     */
    isVisible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContributorModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContributorModel
     */
    cover?: string | null;
    /**
     * 
     * @type {ContributorContributorMeta}
     * @memberof ContributorModel
     */
    meta?: ContributorContributorMeta;
    /**
     * 
     * @type {number}
     * @memberof ContributorModel
     */
    interpretReferences?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ContributorModel
     */
    otherReferences?: number | null;
}

/**
 * Check if a given object implements the ContributorModel interface.
 */
export function instanceOfContributorModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContributorModelFromJSON(json: any): ContributorModel {
    return ContributorModelFromJSONTyped(json, false);
}

export function ContributorModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContributorModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'isVisible': !exists(json, 'isVisible') ? undefined : json['isVisible'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'cover': !exists(json, 'cover') ? undefined : json['cover'],
        'meta': !exists(json, 'meta') ? undefined : ContributorContributorMetaFromJSON(json['meta']),
        'interpretReferences': !exists(json, 'interpretReferences') ? undefined : json['interpretReferences'],
        'otherReferences': !exists(json, 'otherReferences') ? undefined : json['otherReferences'],
    };
}

export function ContributorModelToJSON(value?: ContributorModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'isVisible': value.isVisible,
        'name': value.name,
        'cover': value.cover,
        'meta': ContributorContributorMetaToJSON(value.meta),
        'interpretReferences': value.interpretReferences,
        'otherReferences': value.otherReferences,
    };
}
