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
import type { GetProjectStandingsChurch } from './GetProjectStandingsChurch';
import {
    GetProjectStandingsChurchFromJSON,
    GetProjectStandingsChurchFromJSONTyped,
    GetProjectStandingsChurchToJSON,
} from './GetProjectStandingsChurch';

/**
 * 
 * @export
 * @interface GetProjectStandingsProjectStandings
 */
export interface GetProjectStandingsProjectStandings {
    /**
     * 
     * @type {string}
     * @memberof GetProjectStandingsProjectStandings
     */
    boysTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetProjectStandingsProjectStandings
     */
    girlsTitle?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GetProjectStandingsProjectStandings
     */
    boysPoints?: number;
    /**
     * 
     * @type {number}
     * @memberof GetProjectStandingsProjectStandings
     */
    girlsPoints?: number;
    /**
     * 
     * @type {string}
     * @memberof GetProjectStandingsProjectStandings
     */
    largeChurchesTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetProjectStandingsProjectStandings
     */
    smallChurchesTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetProjectStandingsProjectStandings
     */
    churchTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetProjectStandingsProjectStandings
     */
    gameNightsTitle?: string | null;
    /**
     * 
     * @type {Array<GetProjectStandingsChurch>}
     * @memberof GetProjectStandingsProjectStandings
     */
    largeChurches?: Array<GetProjectStandingsChurch> | null;
    /**
     * 
     * @type {Array<GetProjectStandingsChurch>}
     * @memberof GetProjectStandingsProjectStandings
     */
    smallChurches?: Array<GetProjectStandingsChurch> | null;
}

/**
 * Check if a given object implements the GetProjectStandingsProjectStandings interface.
 */
export function instanceOfGetProjectStandingsProjectStandings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetProjectStandingsProjectStandingsFromJSON(json: any): GetProjectStandingsProjectStandings {
    return GetProjectStandingsProjectStandingsFromJSONTyped(json, false);
}

export function GetProjectStandingsProjectStandingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProjectStandingsProjectStandings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'boysTitle': !exists(json, 'boys_title') ? undefined : json['boys_title'],
        'girlsTitle': !exists(json, 'girls_title') ? undefined : json['girls_title'],
        'boysPoints': !exists(json, 'boys_points') ? undefined : json['boys_points'],
        'girlsPoints': !exists(json, 'girls_points') ? undefined : json['girls_points'],
        'largeChurchesTitle': !exists(json, 'large_churches_title') ? undefined : json['large_churches_title'],
        'smallChurchesTitle': !exists(json, 'small_churches_title') ? undefined : json['small_churches_title'],
        'churchTitle': !exists(json, 'church_title') ? undefined : json['church_title'],
        'gameNightsTitle': !exists(json, 'game_nights_title') ? undefined : json['game_nights_title'],
        'largeChurches': !exists(json, 'large_churches') ? undefined : (json['large_churches'] === null ? null : (json['large_churches'] as Array<any>).map(GetProjectStandingsChurchFromJSON)),
        'smallChurches': !exists(json, 'small_churches') ? undefined : (json['small_churches'] === null ? null : (json['small_churches'] as Array<any>).map(GetProjectStandingsChurchFromJSON)),
    };
}

export function GetProjectStandingsProjectStandingsToJSON(value?: GetProjectStandingsProjectStandings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'boys_title': value.boysTitle,
        'girls_title': value.girlsTitle,
        'boys_points': value.boysPoints,
        'girls_points': value.girlsPoints,
        'large_churches_title': value.largeChurchesTitle,
        'small_churches_title': value.smallChurchesTitle,
        'church_title': value.churchTitle,
        'game_nights_title': value.gameNightsTitle,
        'large_churches': value.largeChurches === undefined ? undefined : (value.largeChurches === null ? null : (value.largeChurches as Array<any>).map(GetProjectStandingsChurchToJSON)),
        'small_churches': value.smallChurches === undefined ? undefined : (value.smallChurches === null ? null : (value.smallChurches as Array<any>).map(GetProjectStandingsChurchToJSON)),
    };
}

