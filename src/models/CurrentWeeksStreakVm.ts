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
import type { CurrentWeeksStreakVmHomeScreenTextOptions } from './CurrentWeeksStreakVmHomeScreenTextOptions';
import {
    CurrentWeeksStreakVmHomeScreenTextOptionsFromJSON,
    CurrentWeeksStreakVmHomeScreenTextOptionsFromJSONTyped,
    CurrentWeeksStreakVmHomeScreenTextOptionsToJSON,
} from './CurrentWeeksStreakVmHomeScreenTextOptions';
import type { DayOfWeek } from './DayOfWeek';
import {
    DayOfWeekFromJSON,
    DayOfWeekFromJSONTyped,
    DayOfWeekToJSON,
} from './DayOfWeek';

/**
 * 
 * @export
 * @interface CurrentWeeksStreakVm
 */
export interface CurrentWeeksStreakVm {
    /**
     * 
     * @type {number}
     * @memberof CurrentWeeksStreakVm
     */
    year?: number;
    /**
     * 
     * @type {number}
     * @memberof CurrentWeeksStreakVm
     */
    weekOfTheYear?: number;
    /**
     * 
     * @type {number}
     * @memberof CurrentWeeksStreakVm
     */
    todaysFraKaareTrackId?: number;
    /**
     * 
     * @type {number}
     * @memberof CurrentWeeksStreakVm
     */
    numberOfPerfectWeeks?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentWeeksStreakVm
     */
    readonly isPerfectWeek?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CurrentWeeksStreakVm
     */
    readonly total?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentWeeksStreakVm
     */
    monday?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentWeeksStreakVm
     */
    tuesday?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentWeeksStreakVm
     */
    wednesday?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentWeeksStreakVm
     */
    thursday?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentWeeksStreakVm
     */
    friday?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CurrentWeeksStreakVm
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CurrentWeeksStreakVm
     */
    readonly type: CurrentWeeksStreakVmTypeEnum;
    /**
     * 
     * @type {DayOfWeek}
     * @memberof CurrentWeeksStreakVm
     */
    dayOfTheWeek?: DayOfWeek;
    /**
     * 
     * @type {Date}
     * @memberof CurrentWeeksStreakVm
     */
    eligibleUntil?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CurrentWeeksStreakVm
     */
    lastChanged?: Date;
    /**
     * 
     * @type {number}
     * @memberof CurrentWeeksStreakVm
     */
    daysInARow?: number;
    /**
     * 
     * @type {CurrentWeeksStreakVmHomeScreenTextOptions}
     * @memberof CurrentWeeksStreakVm
     */
    homeScreenText?: CurrentWeeksStreakVmHomeScreenTextOptions;
}


/**
 * @export
 */
export const CurrentWeeksStreakVmTypeEnum = {
    ListeningStreak: 'listening_streak'
} as const;
export type CurrentWeeksStreakVmTypeEnum = typeof CurrentWeeksStreakVmTypeEnum[keyof typeof CurrentWeeksStreakVmTypeEnum];


/**
 * Check if a given object implements the CurrentWeeksStreakVm interface.
 */
export function instanceOfCurrentWeeksStreakVm(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CurrentWeeksStreakVmFromJSON(json: any): CurrentWeeksStreakVm {
    return CurrentWeeksStreakVmFromJSONTyped(json, false);
}

export function CurrentWeeksStreakVmFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentWeeksStreakVm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'year': !exists(json, 'year') ? undefined : json['year'],
        'weekOfTheYear': !exists(json, 'week_of_the_year') ? undefined : json['week_of_the_year'],
        'todaysFraKaareTrackId': !exists(json, 'todays_fra_kaare_track_id') ? undefined : json['todays_fra_kaare_track_id'],
        'numberOfPerfectWeeks': !exists(json, 'number_of_perfect_weeks') ? undefined : json['number_of_perfect_weeks'],
        'isPerfectWeek': !exists(json, 'is_perfect_week') ? undefined : json['is_perfect_week'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'monday': !exists(json, 'monday') ? undefined : json['monday'],
        'tuesday': !exists(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !exists(json, 'wednesday') ? undefined : json['wednesday'],
        'thursday': !exists(json, 'thursday') ? undefined : json['thursday'],
        'friday': !exists(json, 'friday') ? undefined : json['friday'],
        'id': json['id'],
        'type': json['type'],
        'dayOfTheWeek': !exists(json, 'day_of_the_week') ? undefined : DayOfWeekFromJSON(json['day_of_the_week']),
        'eligibleUntil': !exists(json, 'eligible_until') ? undefined : (new Date(json['eligible_until'])),
        'lastChanged': !exists(json, 'last_changed') ? undefined : (new Date(json['last_changed'])),
        'daysInARow': !exists(json, 'days_in_a_row') ? undefined : json['days_in_a_row'],
        'homeScreenText': !exists(json, 'home_screen_text') ? undefined : CurrentWeeksStreakVmHomeScreenTextOptionsFromJSON(json['home_screen_text']),
    };
}

export function CurrentWeeksStreakVmToJSON(value?: CurrentWeeksStreakVm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'year': value.year,
        'week_of_the_year': value.weekOfTheYear,
        'todays_fra_kaare_track_id': value.todaysFraKaareTrackId,
        'number_of_perfect_weeks': value.numberOfPerfectWeeks,
        'monday': value.monday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
        'thursday': value.thursday,
        'friday': value.friday,
        'id': value.id,
        'day_of_the_week': DayOfWeekToJSON(value.dayOfTheWeek),
        'eligible_until': value.eligibleUntil === undefined ? undefined : (value.eligibleUntil.toISOString()),
        'last_changed': value.lastChanged === undefined ? undefined : (value.lastChanged.toISOString()),
        'days_in_a_row': value.daysInARow,
        'home_screen_text': CurrentWeeksStreakVmHomeScreenTextOptionsToJSON(value.homeScreenText),
    };
}

