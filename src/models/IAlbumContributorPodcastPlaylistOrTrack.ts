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

import {
    AlbumModel,
    instanceOfAlbumModel,
    AlbumModelFromJSON,
    AlbumModelFromJSONTyped,
    AlbumModelToJSON,
} from './AlbumModel';
import {
    ContributorModel,
    instanceOfContributorModel,
    ContributorModelFromJSON,
    ContributorModelFromJSONTyped,
    ContributorModelToJSON,
} from './ContributorModel';
import {
    PlaylistModel,
    instanceOfPlaylistModel,
    PlaylistModelFromJSON,
    PlaylistModelFromJSONTyped,
    PlaylistModelToJSON,
} from './PlaylistModel';
import {
    PodcastModel,
    instanceOfPodcastModel,
    PodcastModelFromJSON,
    PodcastModelFromJSONTyped,
    PodcastModelToJSON,
} from './PodcastModel';
import {
    TrackModel,
    instanceOfTrackModel,
    TrackModelFromJSON,
    TrackModelFromJSONTyped,
    TrackModelToJSON,
} from './TrackModel';

/**
 * @type IAlbumContributorPodcastPlaylistOrTrack
 * 
 * @export
 */
export type IAlbumContributorPodcastPlaylistOrTrack = { type: 'album' } & AlbumModel | { type: 'contributor' } & ContributorModel | { type: 'playlist' } & PlaylistModel | { type: 'podcast' } & PodcastModel | { type: 'track' } & TrackModel;

export function IAlbumContributorPodcastPlaylistOrTrackFromJSON(json: any): IAlbumContributorPodcastPlaylistOrTrack {
    return IAlbumContributorPodcastPlaylistOrTrackFromJSONTyped(json, false);
}

export function IAlbumContributorPodcastPlaylistOrTrackFromJSONTyped(json: any, ignoreDiscriminator: boolean): IAlbumContributorPodcastPlaylistOrTrack {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'album':
            return {...AlbumModelFromJSONTyped(json, true), type: 'album'};
        case 'contributor':
            return {...ContributorModelFromJSONTyped(json, true), type: 'contributor'};
        case 'playlist':
            return {...PlaylistModelFromJSONTyped(json, true), type: 'playlist'};
        case 'podcast':
            return {...PodcastModelFromJSONTyped(json, true), type: 'podcast'};
        case 'track':
            return {...TrackModelFromJSONTyped(json, true), type: 'track'};
        default:
            throw new Error(`No variant of IAlbumContributorPodcastPlaylistOrTrack exists with 'type=${json['type']}'`);
    }
}

export function IAlbumContributorPodcastPlaylistOrTrackToJSON(value?: IAlbumContributorPodcastPlaylistOrTrack | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'album':
            return AlbumModelToJSON(value);
        case 'contributor':
            return ContributorModelToJSON(value);
        case 'playlist':
            return PlaylistModelToJSON(value);
        case 'podcast':
            return PodcastModelToJSON(value);
        case 'track':
            return TrackModelToJSON(value);
        default:
            throw new Error(`No variant of IAlbumContributorPodcastPlaylistOrTrack exists with 'type=${value['type']}'`);
    }

}
