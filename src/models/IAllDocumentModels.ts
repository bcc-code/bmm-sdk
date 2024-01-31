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

import type { AchievementCollection } from './AchievementCollection';
import {
    instanceOfAchievementCollection,
    AchievementCollectionFromJSON,
    AchievementCollectionFromJSONTyped,
    AchievementCollectionToJSON,
} from './AchievementCollection';
import type { AlbumModel } from './AlbumModel';
import {
    instanceOfAlbumModel,
    AlbumModelFromJSON,
    AlbumModelFromJSONTyped,
    AlbumModelToJSON,
} from './AlbumModel';
import type { ChapterHeader } from './ChapterHeader';
import {
    instanceOfChapterHeader,
    ChapterHeaderFromJSON,
    ChapterHeaderFromJSONTyped,
    ChapterHeaderToJSON,
} from './ChapterHeader';
import type { ContributorModel } from './ContributorModel';
import {
    instanceOfContributorModel,
    ContributorModelFromJSON,
    ContributorModelFromJSONTyped,
    ContributorModelToJSON,
} from './ContributorModel';
import type { CurrentWeeksStreakVm } from './CurrentWeeksStreakVm';
import {
    instanceOfCurrentWeeksStreakVm,
    CurrentWeeksStreakVmFromJSON,
    CurrentWeeksStreakVmFromJSONTyped,
    CurrentWeeksStreakVmToJSON,
} from './CurrentWeeksStreakVm';
import type { InfoMessageModel } from './InfoMessageModel';
import {
    instanceOfInfoMessageModel,
    InfoMessageModelFromJSON,
    InfoMessageModelFromJSONTyped,
    InfoMessageModelToJSON,
} from './InfoMessageModel';
import type { PlaylistModel } from './PlaylistModel';
import {
    instanceOfPlaylistModel,
    PlaylistModelFromJSON,
    PlaylistModelFromJSONTyped,
    PlaylistModelToJSON,
} from './PlaylistModel';
import type { PodcastModel } from './PodcastModel';
import {
    instanceOfPodcastModel,
    PodcastModelFromJSON,
    PodcastModelFromJSONTyped,
    PodcastModelToJSON,
} from './PodcastModel';
import type { ProjectBox } from './ProjectBox';
import {
    instanceOfProjectBox,
    ProjectBoxFromJSON,
    ProjectBoxFromJSONTyped,
    ProjectBoxToJSON,
} from './ProjectBox';
import type { RecommendationModel } from './RecommendationModel';
import {
    instanceOfRecommendationModel,
    RecommendationModelFromJSON,
    RecommendationModelFromJSONTyped,
    RecommendationModelToJSON,
} from './RecommendationModel';
import type { SectionHeaderModel } from './SectionHeaderModel';
import {
    instanceOfSectionHeaderModel,
    SectionHeaderModelFromJSON,
    SectionHeaderModelFromJSONTyped,
    SectionHeaderModelToJSON,
} from './SectionHeaderModel';
import type { TileMessageModel } from './TileMessageModel';
import {
    instanceOfTileMessageModel,
    TileMessageModelFromJSON,
    TileMessageModelFromJSONTyped,
    TileMessageModelToJSON,
} from './TileMessageModel';
import type { TileModel } from './TileModel';
import {
    instanceOfTileModel,
    TileModelFromJSON,
    TileModelFromJSONTyped,
    TileModelToJSON,
} from './TileModel';
import type { TileVideoModel } from './TileVideoModel';
import {
    instanceOfTileVideoModel,
    TileVideoModelFromJSON,
    TileVideoModelFromJSONTyped,
    TileVideoModelToJSON,
} from './TileVideoModel';
import type { TrackCollectionModel } from './TrackCollectionModel';
import {
    instanceOfTrackCollectionModel,
    TrackCollectionModelFromJSON,
    TrackCollectionModelFromJSONTyped,
    TrackCollectionModelToJSON,
} from './TrackCollectionModel';
import type { TrackModel } from './TrackModel';
import {
    instanceOfTrackModel,
    TrackModelFromJSON,
    TrackModelFromJSONTyped,
    TrackModelToJSON,
} from './TrackModel';
import type { YearInReviewModel } from './YearInReviewModel';
import {
    instanceOfYearInReviewModel,
    YearInReviewModelFromJSON,
    YearInReviewModelFromJSONTyped,
    YearInReviewModelToJSON,
} from './YearInReviewModel';

/**
 * @type IAllDocumentModels
 * 
 * @export
 */
export type IAllDocumentModels = { type: 'InfoMessage' } & InfoMessageModel | { type: 'Tile' } & TileModel | { type: 'achievement_collection' } & AchievementCollection | { type: 'album' } & AlbumModel | { type: 'chapter_header' } & ChapterHeader | { type: 'contributor' } & ContributorModel | { type: 'listening_streak' } & CurrentWeeksStreakVm | { type: 'playlist' } & PlaylistModel | { type: 'podcast' } & PodcastModel | { type: 'project_box' } & ProjectBox | { type: 'recommendation' } & RecommendationModel | { type: 'section_header' } & SectionHeaderModel | { type: 'tile_message' } & TileMessageModel | { type: 'tile_video' } & TileVideoModel | { type: 'track' } & TrackModel | { type: 'track_collection' } & TrackCollectionModel | { type: 'year_in_review' } & YearInReviewModel;

export function IAllDocumentModelsFromJSON(json: any): IAllDocumentModels {
    return IAllDocumentModelsFromJSONTyped(json, false);
}

export function IAllDocumentModelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IAllDocumentModels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'InfoMessage':
            return {...InfoMessageModelFromJSONTyped(json, true), type: 'InfoMessage'};
        case 'Tile':
            return {...TileModelFromJSONTyped(json, true), type: 'Tile'};
        case 'achievement_collection':
            return {...AchievementCollectionFromJSONTyped(json, true), type: 'achievement_collection'};
        case 'album':
            return {...AlbumModelFromJSONTyped(json, true), type: 'album'};
        case 'chapter_header':
            return {...ChapterHeaderFromJSONTyped(json, true), type: 'chapter_header'};
        case 'contributor':
            return {...ContributorModelFromJSONTyped(json, true), type: 'contributor'};
        case 'listening_streak':
            return {...CurrentWeeksStreakVmFromJSONTyped(json, true), type: 'listening_streak'};
        case 'playlist':
            return {...PlaylistModelFromJSONTyped(json, true), type: 'playlist'};
        case 'podcast':
            return {...PodcastModelFromJSONTyped(json, true), type: 'podcast'};
        case 'project_box':
            return {...ProjectBoxFromJSONTyped(json, true), type: 'project_box'};
        case 'recommendation':
            return {...RecommendationModelFromJSONTyped(json, true), type: 'recommendation'};
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
            throw new Error(`No variant of IAllDocumentModels exists with 'type=${json['type']}'`);
    }
}

export function IAllDocumentModelsToJSON(value?: IAllDocumentModels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'InfoMessage':
            return InfoMessageModelToJSON(value);
        case 'Tile':
            return TileModelToJSON(value);
        case 'achievement_collection':
            return AchievementCollectionToJSON(value);
        case 'album':
            return AlbumModelToJSON(value);
        case 'chapter_header':
            return ChapterHeaderToJSON(value);
        case 'contributor':
            return ContributorModelToJSON(value);
        case 'listening_streak':
            return CurrentWeeksStreakVmToJSON(value);
        case 'playlist':
            return PlaylistModelToJSON(value);
        case 'podcast':
            return PodcastModelToJSON(value);
        case 'project_box':
            return ProjectBoxToJSON(value);
        case 'recommendation':
            return RecommendationModelToJSON(value);
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
            throw new Error(`No variant of IAllDocumentModels exists with 'type=${value['type']}'`);
    }

}

