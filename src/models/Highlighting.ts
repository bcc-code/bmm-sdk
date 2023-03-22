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
 * @interface Highlighting
 */
export interface Highlighting {
    /**
     * 
     * @type {string}
     * @memberof Highlighting
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Highlighting
     */
    text?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Highlighting
     */
    startPositionInSeconds?: number;
}

/**
 * Check if a given object implements the Highlighting interface.
 */
export function instanceOfHighlighting(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HighlightingFromJSON(json: any): Highlighting {
    return HighlightingFromJSONTyped(json, false);
}

export function HighlightingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Highlighting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'startPositionInSeconds': !exists(json, 'start_position_in_seconds') ? undefined : json['start_position_in_seconds'],
    };
}

export function HighlightingToJSON(value?: Highlighting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'text': value.text,
        'start_position_in_seconds': value.startPositionInSeconds,
    };
}

