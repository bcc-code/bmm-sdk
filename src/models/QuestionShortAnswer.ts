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
 * @interface QuestionShortAnswer
 */
export interface QuestionShortAnswer {
    /**
     * 
     * @type {string}
     * @memberof QuestionShortAnswer
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof QuestionShortAnswer
     */
    text?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof QuestionShortAnswer
     */
    hasPrimaryStyle?: boolean;
}

/**
 * Check if a given object implements the QuestionShortAnswer interface.
 */
export function instanceOfQuestionShortAnswer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuestionShortAnswerFromJSON(json: any): QuestionShortAnswer {
    return QuestionShortAnswerFromJSONTyped(json, false);
}

export function QuestionShortAnswerFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionShortAnswer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'hasPrimaryStyle': !exists(json, 'has_primary_style') ? undefined : json['has_primary_style'],
    };
}

export function QuestionShortAnswerToJSON(value?: QuestionShortAnswer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'text': value.text,
        'has_primary_style': value.hasPrimaryStyle,
    };
}
