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
 * @interface ITileModel
 */
export interface ITileModel {
    /**
     * 
     * @type {number}
     * @memberof ITileModel
     */
    order?: number;
    /**
     * 
     * @type {Date}
     * @memberof ITileModel
     */
    orderDate?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof ITileModel
     */
    id?: number;
}

/**
 * Check if a given object implements the ITileModel interface.
 */
export function instanceOfITileModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ITileModelFromJSON(json: any): ITileModel {
    return ITileModelFromJSONTyped(json, false);
}

export function ITileModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ITileModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'order': !exists(json, 'order') ? undefined : json['order'],
        'orderDate': !exists(json, 'order_date') ? undefined : (json['order_date'] === null ? null : new Date(json['order_date'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function ITileModelToJSON(value?: ITileModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order': value.order,
        'order_date': value.orderDate === undefined ? undefined : (value.orderDate === null ? null : value.orderDate.toISOString()),
        'id': value.id,
    };
}
