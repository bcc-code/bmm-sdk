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
 * @interface AlbumYearFacetsQueryResult
 */
export interface AlbumYearFacetsQueryResult {
    /**
     * 
     * @type {number}
     * @memberof AlbumYearFacetsQueryResult
     */
    year?: number;
    /**
     * 
     * @type {number}
     * @memberof AlbumYearFacetsQueryResult
     */
    count?: number;
}

/**
 * Check if a given object implements the AlbumYearFacetsQueryResult interface.
 */
export function instanceOfAlbumYearFacetsQueryResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlbumYearFacetsQueryResultFromJSON(json: any): AlbumYearFacetsQueryResult {
    return AlbumYearFacetsQueryResultFromJSONTyped(json, false);
}

export function AlbumYearFacetsQueryResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlbumYearFacetsQueryResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'year': !exists(json, 'year') ? undefined : json['year'],
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function AlbumYearFacetsQueryResultToJSON(value?: AlbumYearFacetsQueryResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'year': value.year,
        'count': value.count,
    };
}

