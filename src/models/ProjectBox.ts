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
import type { AchievementModel } from './AchievementModel';
import {
    AchievementModelFromJSON,
    AchievementModelFromJSONTyped,
    AchievementModelToJSON,
} from './AchievementModel';

/**
 * 
 * @export
 * @interface ProjectBox
 */
export interface ProjectBox {
    /**
     * 
     * @type {number}
     * @memberof ProjectBox
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectBox
     */
    readonly type: ProjectBoxTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ProjectBox
     */
    title?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectBox
     */
    showIcon?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectBox
     */
    openByDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ProjectBox
     */
    points?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectBox
     */
    pointsDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectBox
     */
    buttonTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectBox
     */
    buttonWebsite?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectBox
     */
    buttonShowIcon?: boolean;
    /**
     * 
     * @type {Array<AchievementModel>}
     * @memberof ProjectBox
     */
    achievements?: Array<AchievementModel> | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectBox
     */
    rulesLinkTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectBox
     */
    iconColor?: string | null;
}


/**
 * @export
 */
export const ProjectBoxTypeEnum = {
    ProjectBox: 'project_box'
} as const;
export type ProjectBoxTypeEnum = typeof ProjectBoxTypeEnum[keyof typeof ProjectBoxTypeEnum];


/**
 * Check if a given object implements the ProjectBox interface.
 */
export function instanceOfProjectBox(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ProjectBoxFromJSON(json: any): ProjectBox {
    return ProjectBoxFromJSONTyped(json, false);
}

export function ProjectBoxFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectBox {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'showIcon': !exists(json, 'show_icon') ? undefined : json['show_icon'],
        'openByDefault': !exists(json, 'open_by_default') ? undefined : json['open_by_default'],
        'points': !exists(json, 'points') ? undefined : json['points'],
        'pointsDescription': !exists(json, 'points_description') ? undefined : json['points_description'],
        'buttonTitle': !exists(json, 'button_title') ? undefined : json['button_title'],
        'buttonWebsite': !exists(json, 'button_website') ? undefined : json['button_website'],
        'buttonShowIcon': !exists(json, 'button_show_icon') ? undefined : json['button_show_icon'],
        'achievements': !exists(json, 'achievements') ? undefined : (json['achievements'] === null ? null : (json['achievements'] as Array<any>).map(AchievementModelFromJSON)),
        'rulesLinkTitle': !exists(json, 'rules_link_title') ? undefined : json['rules_link_title'],
        'iconColor': !exists(json, 'icon_color') ? undefined : json['icon_color'],
    };
}

export function ProjectBoxToJSON(value?: ProjectBox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'show_icon': value.showIcon,
        'open_by_default': value.openByDefault,
        'points': value.points,
        'points_description': value.pointsDescription,
        'button_title': value.buttonTitle,
        'button_website': value.buttonWebsite,
        'button_show_icon': value.buttonShowIcon,
        'achievements': value.achievements === undefined ? undefined : (value.achievements === null ? null : (value.achievements as Array<any>).map(AchievementModelToJSON)),
        'rules_link_title': value.rulesLinkTitle,
        'icon_color': value.iconColor,
    };
}

