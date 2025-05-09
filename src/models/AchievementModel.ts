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
 * @interface AchievementModel
 */
export interface AchievementModel {
    /**
     * 
     * @type {string}
     * @memberof AchievementModel
     */
    id?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AchievementModel
     */
    hasAchieved?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AchievementModel
     */
    hasAcknowledged?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AchievementModel
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AchievementModel
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AchievementModel
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AchievementModel
     */
    trackId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AchievementModel
     */
    reward?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AchievementModel
     */
    actionUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AchievementModel
     */
    actionText?: string | null;
}

/**
 * Check if a given object implements the AchievementModel interface.
 */
export function instanceOfAchievementModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AchievementModelFromJSON(json: any): AchievementModel {
    return AchievementModelFromJSONTyped(json, false);
}

export function AchievementModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AchievementModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasAchieved': !exists(json, 'has_achieved') ? undefined : json['has_achieved'],
        'hasAcknowledged': !exists(json, 'has_acknowledged') ? undefined : json['has_acknowledged'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'trackId': !exists(json, 'track_id') ? undefined : json['track_id'],
        'reward': !exists(json, 'reward') ? undefined : json['reward'],
        'actionUrl': !exists(json, 'action_url') ? undefined : json['action_url'],
        'actionText': !exists(json, 'action_text') ? undefined : json['action_text'],
    };
}

export function AchievementModelToJSON(value?: AchievementModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'has_achieved': value.hasAchieved,
        'has_acknowledged': value.hasAcknowledged,
        'url': value.url,
        'title': value.title,
        'description': value.description,
        'track_id': value.trackId,
        'reward': value.reward,
        'action_url': value.actionUrl,
        'action_text': value.actionText,
    };
}

