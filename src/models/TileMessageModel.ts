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
 * @interface TileMessageModel
 */
export interface TileMessageModel {
    /**
     * 
     * @type {number}
     * @memberof TileMessageModel
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof TileMessageModel
     */
    readonly type: TileMessageModelTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TileMessageModel
     */
    header?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TileMessageModel
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TileMessageModel
     */
    subtitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TileMessageModel
     */
    buttonText?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TileMessageModel
     */
    buttonUrl?: string | null;
}


/**
 * @export
 */
export const TileMessageModelTypeEnum = {
    TileMessage: 'tile_message'
} as const;
export type TileMessageModelTypeEnum = typeof TileMessageModelTypeEnum[keyof typeof TileMessageModelTypeEnum];


/**
 * Check if a given object implements the TileMessageModel interface.
 */
export function instanceOfTileMessageModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function TileMessageModelFromJSON(json: any): TileMessageModel {
    return TileMessageModelFromJSONTyped(json, false);
}

export function TileMessageModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TileMessageModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'header': !exists(json, 'header') ? undefined : json['header'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
        'buttonText': !exists(json, 'button_text') ? undefined : json['button_text'],
        'buttonUrl': !exists(json, 'button_url') ? undefined : json['button_url'],
    };
}

export function TileMessageModelToJSON(value?: TileMessageModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'header': value.header,
        'title': value.title,
        'subtitle': value.subtitle,
        'button_text': value.buttonText,
        'button_url': value.buttonUrl,
    };
}

