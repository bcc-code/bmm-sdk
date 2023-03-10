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
import type { LanguageEnum } from './LanguageEnum';
import {
    LanguageEnumFromJSON,
    LanguageEnumFromJSONTyped,
    LanguageEnumToJSON,
} from './LanguageEnum';

/**
 * 
 * @export
 * @interface NotificationTranslation
 */
export interface NotificationTranslation {
    /**
     * 
     * @type {LanguageEnum}
     * @memberof NotificationTranslation
     */
    language: LanguageEnum;
    /**
     * 
     * @type {string}
     * @memberof NotificationTranslation
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationTranslation
     */
    message: string;
}

/**
 * Check if a given object implements the NotificationTranslation interface.
 */
export function instanceOfNotificationTranslation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function NotificationTranslationFromJSON(json: any): NotificationTranslation {
    return NotificationTranslationFromJSONTyped(json, false);
}

export function NotificationTranslationFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationTranslation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'language': LanguageEnumFromJSON(json['language']),
        'title': json['title'],
        'message': json['message'],
    };
}

export function NotificationTranslationToJSON(value?: NotificationTranslation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'language': LanguageEnumToJSON(value.language),
        'title': value.title,
        'message': value.message,
    };
}

