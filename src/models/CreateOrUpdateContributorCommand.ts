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
 * @interface CreateOrUpdateContributorCommand
 */
export interface CreateOrUpdateContributorCommand {
    /**
     * 
     * @type {number}
     * @memberof CreateOrUpdateContributorCommand
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateContributorCommand
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateOrUpdateContributorCommand
     */
    isVisible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateContributorCommand
     */
    cover?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateContributorCommand
     */
    type?: string | null;
}

/**
 * Check if a given object implements the CreateOrUpdateContributorCommand interface.
 */
export function instanceOfCreateOrUpdateContributorCommand(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateOrUpdateContributorCommandFromJSON(json: any): CreateOrUpdateContributorCommand {
    return CreateOrUpdateContributorCommandFromJSONTyped(json, false);
}

export function CreateOrUpdateContributorCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrUpdateContributorCommand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isVisible': !exists(json, 'isVisible') ? undefined : json['isVisible'],
        'cover': !exists(json, 'cover') ? undefined : json['cover'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function CreateOrUpdateContributorCommandToJSON(value?: CreateOrUpdateContributorCommand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'isVisible': value.isVisible,
        'cover': value.cover,
        'type': value.type,
    };
}
