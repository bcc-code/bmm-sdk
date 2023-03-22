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
import type { MediaTypeEnum } from './MediaTypeEnum';
import {
    MediaTypeEnumFromJSON,
    MediaTypeEnumFromJSONTyped,
    MediaTypeEnumToJSON,
} from './MediaTypeEnum';
import type { TrackModelMediumFile } from './TrackModelMediumFile';
import {
    TrackModelMediumFileFromJSON,
    TrackModelMediumFileFromJSONTyped,
    TrackModelMediumFileToJSON,
} from './TrackModelMediumFile';

/**
 * 
 * @export
 * @interface TrackModelMedium
 */
export interface TrackModelMedium {
    /**
     * 
     * @type {MediaTypeEnum}
     * @memberof TrackModelMedium
     */
    type?: MediaTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof TrackModelMedium
     */
    isVisible?: boolean;
    /**
     * 
     * @type {Array<TrackModelMediumFile>}
     * @memberof TrackModelMedium
     */
    files?: Array<TrackModelMediumFile> | null;
}

/**
 * Check if a given object implements the TrackModelMedium interface.
 */
export function instanceOfTrackModelMedium(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackModelMediumFromJSON(json: any): TrackModelMedium {
    return TrackModelMediumFromJSONTyped(json, false);
}

export function TrackModelMediumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackModelMedium {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : MediaTypeEnumFromJSON(json['type']),
        'isVisible': !exists(json, 'is_visible') ? undefined : json['is_visible'],
        'files': !exists(json, 'files') ? undefined : (json['files'] === null ? null : (json['files'] as Array<any>).map(TrackModelMediumFileFromJSON)),
    };
}

export function TrackModelMediumToJSON(value?: TrackModelMedium | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': MediaTypeEnumToJSON(value.type),
        'is_visible': value.isVisible,
        'files': value.files === undefined ? undefined : (value.files === null ? null : (value.files as Array<any>).map(TrackModelMediumFileToJSON)),
    };
}

