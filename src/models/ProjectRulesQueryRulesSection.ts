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
 * @interface ProjectRulesQueryRulesSection
 */
export interface ProjectRulesQueryRulesSection {
    /**
     * 
     * @type {string}
     * @memberof ProjectRulesQueryRulesSection
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectRulesQueryRulesSection
     */
    text?: string | null;
}

/**
 * Check if a given object implements the ProjectRulesQueryRulesSection interface.
 */
export function instanceOfProjectRulesQueryRulesSection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProjectRulesQueryRulesSectionFromJSON(json: any): ProjectRulesQueryRulesSection {
    return ProjectRulesQueryRulesSectionFromJSONTyped(json, false);
}

export function ProjectRulesQueryRulesSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectRulesQueryRulesSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function ProjectRulesQueryRulesSectionToJSON(value?: ProjectRulesQueryRulesSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'text': value.text,
    };
}
