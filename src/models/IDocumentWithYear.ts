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
 * @interface IDocumentWithYear
 */
export interface IDocumentWithYear {
    /**
     * 
     * @type {number}
     * @memberof IDocumentWithYear
     */
    readonly year?: number;
    /**
     * 
     * @type {number}
     * @memberof IDocumentWithYear
     */
    id?: number;
}

/**
 * Check if a given object implements the IDocumentWithYear interface.
 */
export function instanceOfIDocumentWithYear(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IDocumentWithYearFromJSON(json: any): IDocumentWithYear {
    return IDocumentWithYearFromJSONTyped(json, false);
}

export function IDocumentWithYearFromJSONTyped(json: any, ignoreDiscriminator: boolean): IDocumentWithYear {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'year': !exists(json, 'year') ? undefined : json['year'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function IDocumentWithYearToJSON(value?: IDocumentWithYear | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

