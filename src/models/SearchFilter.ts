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
export const SearchFilter = {
    All: 'All',
    Speeches: 'Speeches',
    Music: 'Music',
    Albums: 'Albums',
    Contributors: 'Contributors',
    Podcasts: 'Podcasts',
    Playlists: 'Playlists'
} as const;
export type SearchFilter = typeof SearchFilter[keyof typeof SearchFilter];


export function SearchFilterFromJSON(json: any): SearchFilter {
    return SearchFilterFromJSONTyped(json, false);
}

export function SearchFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchFilter {
    return json as SearchFilter;
}

export function SearchFilterToJSON(value?: SearchFilter | null): any {
    return value as any;
}

