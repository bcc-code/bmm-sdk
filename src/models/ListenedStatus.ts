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


/**
 * 
 * @export
 */
export const ListenedStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type ListenedStatus = typeof ListenedStatus[keyof typeof ListenedStatus];


export function ListenedStatusFromJSON(json: any): ListenedStatus {
    return ListenedStatusFromJSONTyped(json, false);
}

export function ListenedStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListenedStatus {
    return json as ListenedStatus;
}

export function ListenedStatusToJSON(value?: ListenedStatus | null): any {
    return value as any;
}

