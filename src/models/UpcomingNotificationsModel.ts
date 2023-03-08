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
import type { UpcomingNotificationsModelPodcast } from './UpcomingNotificationsModelPodcast';
import {
    UpcomingNotificationsModelPodcastFromJSON,
    UpcomingNotificationsModelPodcastFromJSONTyped,
    UpcomingNotificationsModelPodcastToJSON,
} from './UpcomingNotificationsModelPodcast';

/**
 * 
 * @export
 * @interface UpcomingNotificationsModel
 */
export interface UpcomingNotificationsModel {
    /**
     * 
     * @type {Array<UpcomingNotificationsModelPodcast>}
     * @memberof UpcomingNotificationsModel
     */
    podcasts?: Array<UpcomingNotificationsModelPodcast> | null;
    /**
     * 
     * @type {number}
     * @memberof UpcomingNotificationsModel
     */
    graceTimeNotificationJob?: number;
    /**
     * 
     * @type {number}
     * @memberof UpcomingNotificationsModel
     */
    notificationBatchPeriod?: number;
}

/**
 * Check if a given object implements the UpcomingNotificationsModel interface.
 */
export function instanceOfUpcomingNotificationsModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpcomingNotificationsModelFromJSON(json: any): UpcomingNotificationsModel {
    return UpcomingNotificationsModelFromJSONTyped(json, false);
}

export function UpcomingNotificationsModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpcomingNotificationsModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'podcasts': !exists(json, 'podcasts') ? undefined : (json['podcasts'] === null ? null : (json['podcasts'] as Array<any>).map(UpcomingNotificationsModelPodcastFromJSON)),
        'graceTimeNotificationJob': !exists(json, 'graceTimeNotificationJob') ? undefined : json['graceTimeNotificationJob'],
        'notificationBatchPeriod': !exists(json, 'notificationBatchPeriod') ? undefined : json['notificationBatchPeriod'],
    };
}

export function UpcomingNotificationsModelToJSON(value?: UpcomingNotificationsModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'podcasts': value.podcasts === undefined ? undefined : (value.podcasts === null ? null : (value.podcasts as Array<any>).map(UpcomingNotificationsModelPodcastToJSON)),
        'graceTimeNotificationJob': value.graceTimeNotificationJob,
        'notificationBatchPeriod': value.notificationBatchPeriod,
    };
}
