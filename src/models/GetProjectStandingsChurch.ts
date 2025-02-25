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
import type { GetProjectStandingsChurchGameNight } from './GetProjectStandingsChurchGameNight';
import {
    GetProjectStandingsChurchGameNightFromJSON,
    GetProjectStandingsChurchGameNightFromJSONTyped,
    GetProjectStandingsChurchGameNightToJSON,
} from './GetProjectStandingsChurchGameNight';

/**
 * 
 * @export
 * @interface GetProjectStandingsChurch
 */
export interface GetProjectStandingsChurch {
    /**
     * 
     * @type {string}
     * @memberof GetProjectStandingsChurch
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GetProjectStandingsChurch
     */
    isHighlighted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetProjectStandingsChurch
     */
    boysPoints?: number;
    /**
     * 
     * @type {number}
     * @memberof GetProjectStandingsChurch
     */
    girlsPoints?: number;
    /**
     * 
     * @type {Array<GetProjectStandingsChurchGameNight>}
     * @memberof GetProjectStandingsChurch
     */
    gameNights?: Array<GetProjectStandingsChurchGameNight> | null;
}

/**
 * Check if a given object implements the GetProjectStandingsChurch interface.
 */
export function instanceOfGetProjectStandingsChurch(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetProjectStandingsChurchFromJSON(json: any): GetProjectStandingsChurch {
    return GetProjectStandingsChurchFromJSONTyped(json, false);
}

export function GetProjectStandingsChurchFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProjectStandingsChurch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isHighlighted': !exists(json, 'is_highlighted') ? undefined : json['is_highlighted'],
        'boysPoints': !exists(json, 'boys_points') ? undefined : json['boys_points'],
        'girlsPoints': !exists(json, 'girls_points') ? undefined : json['girls_points'],
        'gameNights': !exists(json, 'game_nights') ? undefined : (json['game_nights'] === null ? null : (json['game_nights'] as Array<any>).map(GetProjectStandingsChurchGameNightFromJSON)),
    };
}

export function GetProjectStandingsChurchToJSON(value?: GetProjectStandingsChurch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'is_highlighted': value.isHighlighted,
        'boys_points': value.boysPoints,
        'girls_points': value.girlsPoints,
        'game_nights': value.gameNights === undefined ? undefined : (value.gameNights === null ? null : (value.gameNights as Array<any>).map(GetProjectStandingsChurchGameNightToJSON)),
    };
}

