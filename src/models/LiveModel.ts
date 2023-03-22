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
import type { TrackModel } from './TrackModel';
import {
    TrackModelFromJSON,
    TrackModelFromJSONTyped,
    TrackModelToJSON,
} from './TrackModel';

/**
 * 
 * @export
 * @interface LiveModel
 */
export interface LiveModel {
    /**
     * 
     * @type {TrackModel}
     * @memberof LiveModel
     */
    track?: TrackModel;
    /**
     * We send it in case the clock of the user's device is not accurate.
     * @type {Date}
     * @memberof LiveModel
     */
    serverTime?: Date;
}

/**
 * Check if a given object implements the LiveModel interface.
 */
export function instanceOfLiveModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LiveModelFromJSON(json: any): LiveModel {
    return LiveModelFromJSONTyped(json, false);
}

export function LiveModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiveModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'track': !exists(json, 'track') ? undefined : TrackModelFromJSON(json['track']),
        'serverTime': !exists(json, 'server_time') ? undefined : (new Date(json['server_time'])),
    };
}

export function LiveModelToJSON(value?: LiveModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'track': TrackModelToJSON(value.track),
        'server_time': value.serverTime === undefined ? undefined : (value.serverTime.toISOString()),
    };
}

