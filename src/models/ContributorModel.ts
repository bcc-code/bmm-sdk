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
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ContributorModel
     */
    readonly type: ContributorModelTypeEnum;
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
 * @export
 */
export const ContributorModelTypeEnum = {
    Contributor: 'contributor'
} as const;
export type ContributorModelTypeEnum = typeof ContributorModelTypeEnum[keyof typeof ContributorModelTypeEnum];


/**
 * Check if a given object implements the ContributorModel interface.
 */
export function instanceOfContributorModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

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
        
        'id': json['id'],
        'type': json['type'],
        'isVisible': !exists(json, 'is_visible') ? undefined : json['is_visible'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'cover': !exists(json, 'cover') ? undefined : json['cover'],
        'meta': !exists(json, 'meta') ? undefined : ContributorContributorMetaFromJSON(json['meta']),
        'interpretReferences': !exists(json, 'interpret_references') ? undefined : json['interpret_references'],
        'otherReferences': !exists(json, 'other_references') ? undefined : json['other_references'],
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
        'is_visible': value.isVisible,
        'name': value.name,
        'cover': value.cover,
        'meta': ContributorContributorMetaToJSON(value.meta),
        'interpret_references': value.interpretReferences,
        'other_references': value.otherReferences,
    };
}

