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
export const PersonGenderEnum = {
    Male: 'Male',
    Female: 'Female',
    Unknown: 'Unknown'
} as const;
export type PersonGenderEnum = typeof PersonGenderEnum[keyof typeof PersonGenderEnum];


export function PersonGenderEnumFromJSON(json: any): PersonGenderEnum {
    return PersonGenderEnumFromJSONTyped(json, false);
}

export function PersonGenderEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonGenderEnum {
    return json as PersonGenderEnum;
}

export function PersonGenderEnumToJSON(value?: PersonGenderEnum | null): any {
    return value as any;
}

