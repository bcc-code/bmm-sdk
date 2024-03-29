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
export const LanguageEnum = {
    Af: 'af',
    Bg: 'bg',
    Cs: 'cs',
    De: 'de',
    En: 'en',
    El: 'el',
    Et: 'et',
    Es: 'es',
    Fi: 'fi',
    Fr: 'fr',
    Hr: 'hr',
    Hu: 'hu',
    It: 'it',
    Nb: 'nb',
    Nl: 'nl',
    Pl: 'pl',
    Pt: 'pt',
    Ro: 'ro',
    Ru: 'ru',
    Tr: 'tr',
    Zh: 'zh',
    Sl: 'sl',
    He: 'he',
    Ta: 'ta',
    Ml: 'ml',
    Yue: 'yue',
    Kha: 'kha',
    Zxx: 'zxx',
    Ar: 'ar',
    Be: 'be',
    Da: 'da',
    Hi: 'hi',
    Id: 'id',
    Mn: 'mn',
    No: 'no',
    Sa: 'sa',
    Sr: 'sr',
    Sv: 'sv',
    Uk: 'uk'
} as const;
export type LanguageEnum = typeof LanguageEnum[keyof typeof LanguageEnum];


export function LanguageEnumFromJSON(json: any): LanguageEnum {
    return LanguageEnumFromJSONTyped(json, false);
}

export function LanguageEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageEnum {
    return json as LanguageEnum;
}

export function LanguageEnumToJSON(value?: LanguageEnum | null): any {
    return value as any;
}

