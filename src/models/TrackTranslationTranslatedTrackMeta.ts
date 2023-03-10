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
 * @interface TrackTranslationTranslatedTrackMeta
 */
export interface TrackTranslationTranslatedTrackMeta {
    /**
     * 
     * @type {boolean}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    isVisible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    language?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    album?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    tracknumber?: number;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    artist?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    lyricist?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    composer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    publisher?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    itunescompilation?: number;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    attachedPicture?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    time?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    date?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    year?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackTranslationTranslatedTrackMeta
     */
    copyright?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackTranslationTranslatedTrackMeta
     * @deprecated
     */
    bibleReferences?: Array<string> | null;
}

/**
 * Check if a given object implements the TrackTranslationTranslatedTrackMeta interface.
 */
export function instanceOfTrackTranslationTranslatedTrackMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackTranslationTranslatedTrackMetaFromJSON(json: any): TrackTranslationTranslatedTrackMeta {
    return TrackTranslationTranslatedTrackMetaFromJSONTyped(json, false);
}

export function TrackTranslationTranslatedTrackMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackTranslationTranslatedTrackMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isVisible': !exists(json, 'isVisible') ? undefined : json['isVisible'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'album': !exists(json, 'album') ? undefined : json['album'],
        'tracknumber': !exists(json, 'tracknumber') ? undefined : json['tracknumber'],
        'artist': !exists(json, 'artist') ? undefined : json['artist'],
        'lyricist': !exists(json, 'lyricist') ? undefined : json['lyricist'],
        'composer': !exists(json, 'composer') ? undefined : json['composer'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'itunescompilation': !exists(json, 'itunescompilation') ? undefined : json['itunescompilation'],
        'attachedPicture': !exists(json, 'attachedPicture') ? undefined : json['attachedPicture'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'year': !exists(json, 'year') ? undefined : json['year'],
        'copyright': !exists(json, 'copyright') ? undefined : json['copyright'],
        'bibleReferences': !exists(json, 'bibleReferences') ? undefined : json['bibleReferences'],
    };
}

export function TrackTranslationTranslatedTrackMetaToJSON(value?: TrackTranslationTranslatedTrackMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isVisible': value.isVisible,
        'title': value.title,
        'language': value.language,
        'album': value.album,
        'tracknumber': value.tracknumber,
        'artist': value.artist,
        'lyricist': value.lyricist,
        'composer': value.composer,
        'publisher': value.publisher,
        'itunescompilation': value.itunescompilation,
        'attachedPicture': value.attachedPicture,
        'time': value.time,
        'date': value.date,
        'year': value.year,
        'copyright': value.copyright,
        'bibleReferences': value.bibleReferences,
    };
}

