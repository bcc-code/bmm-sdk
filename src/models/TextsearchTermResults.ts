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
    ChapterHeader,
    instanceOfChapterHeader,
    ChapterHeaderFromJSON,
    ChapterHeaderFromJSONTyped,
    ChapterHeaderToJSON,
} from './ChapterHeader';
import {
    ContributorModel,
    instanceOfContributorModel,
    ContributorModelFromJSON,
    ContributorModelFromJSONTyped,
    ContributorModelToJSON,
} from './ContributorModel';
import {
    CurrentWeeksStreakVm,
    instanceOfCurrentWeeksStreakVm,
    CurrentWeeksStreakVmFromJSON,
    CurrentWeeksStreakVmFromJSONTyped,
    CurrentWeeksStreakVmToJSON,
} from './CurrentWeeksStreakVm';
import {
    InfoMessageModel,
    instanceOfInfoMessageModel,
    InfoMessageModelFromJSON,
    InfoMessageModelFromJSONTyped,
    InfoMessageModelToJSON,
} from './InfoMessageModel';
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
    SectionHeaderModel,
    instanceOfSectionHeaderModel,
    SectionHeaderModelFromJSON,
    SectionHeaderModelFromJSONTyped,
    SectionHeaderModelToJSON,
} from './SectionHeaderModel';
import {
    TileMessageModel,
    instanceOfTileMessageModel,
    TileMessageModelFromJSON,
    TileMessageModelFromJSONTyped,
    TileMessageModelToJSON,
} from './TileMessageModel';
import {
    TileModel,
    instanceOfTileModel,
    TileModelFromJSON,
    TileModelFromJSONTyped,
    TileModelToJSON,
} from './TileModel';
import {
    TileVideoModel,
    instanceOfTileVideoModel,
    TileVideoModelFromJSON,
    TileVideoModelFromJSONTyped,
    TileVideoModelToJSON,
} from './TileVideoModel';
import {
    TrackCollectionModel,
    instanceOfTrackCollectionModel,
    TrackCollectionModelFromJSON,
    TrackCollectionModelFromJSONTyped,
    TrackCollectionModelToJSON,
} from './TrackCollectionModel';
import {
    TrackModel,
    instanceOfTrackModel,
    TrackModelFromJSON,
    TrackModelFromJSONTyped,
    TrackModelToJSON,
} from './TrackModel';
import {
    YearInReviewModel,
    instanceOfYearInReviewModel,
    YearInReviewModelFromJSON,
    YearInReviewModelFromJSONTyped,
    YearInReviewModelToJSON,
} from './YearInReviewModel';

/**
 * @type TextsearchTermResults
 * 
 * @export
 */
export type TextsearchTermResults = { type: '' } & CurrentWeeksStreakVm | { type: 'InfoMessage' } & InfoMessageModel | { type: 'Tile' } & TileModel | { type: 'album' } & AlbumModel | { type: 'chapter_header' } & ChapterHeader | { type: 'contributor' } & ContributorModel | { type: 'playlist' } & PlaylistModel | { type: 'podcast' } & PodcastModel | { type: 'section_header' } & SectionHeaderModel | { type: 'tile_message' } & TileMessageModel | { type: 'tile_video' } & TileVideoModel | { type: 'track' } & TrackModel | { type: 'track_collection' } & TrackCollectionModel | { type: 'year_in_review' } & YearInReviewModel;

export function TextsearchTermResultsFromJSON(json: any): TextsearchTermResults {
    return TextsearchTermResultsFromJSONTyped(json, false);
}

export function TextsearchTermResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextsearchTermResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case '':
            return {...CurrentWeeksStreakVmFromJSONTyped(json, true), type: ''};
        case 'InfoMessage':
            return {...InfoMessageModelFromJSONTyped(json, true), type: 'InfoMessage'};
        case 'Tile':
            return {...TileModelFromJSONTyped(json, true), type: 'Tile'};
        case 'album':
            return {...AlbumModelFromJSONTyped(json, true), type: 'album'};
        case 'chapter_header':
            return {...ChapterHeaderFromJSONTyped(json, true), type: 'chapter_header'};
        case 'contributor':
            return {...ContributorModelFromJSONTyped(json, true), type: 'contributor'};
        case 'playlist':
            return {...PlaylistModelFromJSONTyped(json, true), type: 'playlist'};
        case 'podcast':
            return {...PodcastModelFromJSONTyped(json, true), type: 'podcast'};
        case 'section_header':
            return {...SectionHeaderModelFromJSONTyped(json, true), type: 'section_header'};
        case 'tile_message':
            return {...TileMessageModelFromJSONTyped(json, true), type: 'tile_message'};
        case 'tile_video':
            return {...TileVideoModelFromJSONTyped(json, true), type: 'tile_video'};
        case 'track':
            return {...TrackModelFromJSONTyped(json, true), type: 'track'};
        case 'track_collection':
            return {...TrackCollectionModelFromJSONTyped(json, true), type: 'track_collection'};
        case 'year_in_review':
            return {...YearInReviewModelFromJSONTyped(json, true), type: 'year_in_review'};
        default:
            throw new Error(`No variant of TextsearchTermResults exists with 'type=${json['type']}'`);
    }
}

export function TextsearchTermResultsToJSON(value?: TextsearchTermResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case '':
            return CurrentWeeksStreakVmToJSON(value);
        case 'InfoMessage':
            return InfoMessageModelToJSON(value);
        case 'Tile':
            return TileModelToJSON(value);
        case 'album':
            return AlbumModelToJSON(value);
        case 'chapter_header':
            return ChapterHeaderToJSON(value);
        case 'contributor':
            return ContributorModelToJSON(value);
        case 'playlist':
            return PlaylistModelToJSON(value);
        case 'podcast':
            return PodcastModelToJSON(value);
        case 'section_header':
            return SectionHeaderModelToJSON(value);
        case 'tile_message':
            return TileMessageModelToJSON(value);
        case 'tile_video':
            return TileVideoModelToJSON(value);
        case 'track':
            return TrackModelToJSON(value);
        case 'track_collection':
            return TrackCollectionModelToJSON(value);
        case 'year_in_review':
            return YearInReviewModelToJSON(value);
        default:
            throw new Error(`No variant of TextsearchTermResults exists with 'type=${value['type']}'`);
    }

}

