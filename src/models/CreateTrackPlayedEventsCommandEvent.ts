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
import type { ListenedStatus } from './ListenedStatus';
import {
    ListenedStatusFromJSON,
    ListenedStatusFromJSONTyped,
    ListenedStatusToJSON,
} from './ListenedStatus';
import type { ResourceAvailability } from './ResourceAvailability';
import {
    ResourceAvailabilityFromJSON,
    ResourceAvailabilityFromJSONTyped,
    ResourceAvailabilityToJSON,
} from './ResourceAvailability';
import type { TrackSubtype } from './TrackSubtype';
import {
    TrackSubtypeFromJSON,
    TrackSubtypeFromJSONTyped,
    TrackSubtypeToJSON,
} from './TrackSubtype';

/**
 * 
 * @export
 * @interface CreateTrackPlayedEventsCommandEvent
 */
export interface CreateTrackPlayedEventsCommandEvent {
    /**
     * 
     * @type {string}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    personId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    trackId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    uniqueSecondsListened?: number | null;
    /**
     * 
     * @type {ListenedStatus}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    status?: ListenedStatus;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    percentage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    trackLength?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    timestampStart?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    timestampEnd?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    spentTime?: number | null;
    /**
     * 
     * @type {TrackSubtype}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    typeOfTrack?: TrackSubtype;
    /**
     * 
     * @type {ResourceAvailability}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    availability?: ResourceAvailability;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    albumId?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    sentAfterStartup?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    language?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    playbackOrigin?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    lastPosition?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    adjustedPlaybackSpeed?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    client?: string | null;
}

/**
 * Check if a given object implements the CreateTrackPlayedEventsCommandEvent interface.
 */
export function instanceOfCreateTrackPlayedEventsCommandEvent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateTrackPlayedEventsCommandEventFromJSON(json: any): CreateTrackPlayedEventsCommandEvent {
    return CreateTrackPlayedEventsCommandEventFromJSONTyped(json, false);
}

export function CreateTrackPlayedEventsCommandEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTrackPlayedEventsCommandEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'personId': !exists(json, 'person_id') ? undefined : json['person_id'],
        'trackId': !exists(json, 'track_id') ? undefined : json['track_id'],
        'uniqueSecondsListened': !exists(json, 'unique_seconds_listened') ? undefined : json['unique_seconds_listened'],
        'status': !exists(json, 'status') ? undefined : ListenedStatusFromJSON(json['status']),
        'percentage': !exists(json, 'percentage') ? undefined : json['percentage'],
        'trackLength': !exists(json, 'track_length') ? undefined : json['track_length'],
        'timestampStart': !exists(json, 'timestamp_start') ? undefined : (json['timestamp_start'] === null ? null : new Date(json['timestamp_start'])),
        'timestampEnd': !exists(json, 'timestamp_end') ? undefined : (json['timestamp_end'] === null ? null : new Date(json['timestamp_end'])),
        'spentTime': !exists(json, 'spent_time') ? undefined : json['spent_time'],
        'typeOfTrack': !exists(json, 'type_of_track') ? undefined : TrackSubtypeFromJSON(json['type_of_track']),
        'availability': !exists(json, 'availability') ? undefined : ResourceAvailabilityFromJSON(json['availability']),
        'albumId': !exists(json, 'album_id') ? undefined : json['album_id'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'sentAfterStartup': !exists(json, 'sent_after_startup') ? undefined : json['sent_after_startup'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'playbackOrigin': !exists(json, 'playback_origin') ? undefined : json['playback_origin'],
        'lastPosition': !exists(json, 'last_position') ? undefined : json['last_position'],
        'adjustedPlaybackSpeed': !exists(json, 'adjusted_playback_speed') ? undefined : json['adjusted_playback_speed'],
        'client': !exists(json, 'client') ? undefined : json['client'],
    };
}

export function CreateTrackPlayedEventsCommandEventToJSON(value?: CreateTrackPlayedEventsCommandEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'person_id': value.personId,
        'track_id': value.trackId,
        'unique_seconds_listened': value.uniqueSecondsListened,
        'status': ListenedStatusToJSON(value.status),
        'percentage': value.percentage,
        'track_length': value.trackLength,
        'timestamp_start': value.timestampStart === undefined ? undefined : (value.timestampStart === null ? null : value.timestampStart.toISOString()),
        'timestamp_end': value.timestampEnd === undefined ? undefined : (value.timestampEnd === null ? null : value.timestampEnd.toISOString()),
        'spent_time': value.spentTime,
        'type_of_track': TrackSubtypeToJSON(value.typeOfTrack),
        'availability': ResourceAvailabilityToJSON(value.availability),
        'album_id': value.albumId,
        'tags': value.tags,
        'sent_after_startup': value.sentAfterStartup,
        'language': value.language,
        'playback_origin': value.playbackOrigin,
        'last_position': value.lastPosition,
        'adjusted_playback_speed': value.adjustedPlaybackSpeed,
        'client': value.client,
    };
}

