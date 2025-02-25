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


import * as runtime from '../runtime';
import type {
  AchievementModel,
  CreateTrackPlayedEventsCommandEvent,
  DocumentListIAchievementCollectionOrChapterHeader,
  ForbildePoints,
  GetFraKaareStatisticsResponse,
  GetProjectStandingsProjectStandings,
  GetYearInReviewOverviewSlide,
  LanguageEnum,
  ListeningEvent,
  ProcessWatchedCommandEvent,
  ProjectChurchStatisticsQueryChurchStatistics,
  ProjectRulesQueryRules,
  StreakPoint,
} from '../models/index';
import {
    AchievementModelFromJSON,
    AchievementModelToJSON,
    CreateTrackPlayedEventsCommandEventFromJSON,
    CreateTrackPlayedEventsCommandEventToJSON,
    DocumentListIAchievementCollectionOrChapterHeaderFromJSON,
    DocumentListIAchievementCollectionOrChapterHeaderToJSON,
    ForbildePointsFromJSON,
    ForbildePointsToJSON,
    GetFraKaareStatisticsResponseFromJSON,
    GetFraKaareStatisticsResponseToJSON,
    GetProjectStandingsProjectStandingsFromJSON,
    GetProjectStandingsProjectStandingsToJSON,
    GetYearInReviewOverviewSlideFromJSON,
    GetYearInReviewOverviewSlideToJSON,
    LanguageEnumFromJSON,
    LanguageEnumToJSON,
    ListeningEventFromJSON,
    ListeningEventToJSON,
    ProcessWatchedCommandEventFromJSON,
    ProcessWatchedCommandEventToJSON,
    ProjectChurchStatisticsQueryChurchStatisticsFromJSON,
    ProjectChurchStatisticsQueryChurchStatisticsToJSON,
    ProjectRulesQueryRulesFromJSON,
    ProjectRulesQueryRulesToJSON,
    StreakPointFromJSON,
    StreakPointToJSON,
} from '../models/index';

export interface StatisticsAchievementIdGetRequest {
    id: string;
    lang?: LanguageEnum;
    theme?: string;
}

export interface StatisticsAchievementNameAcknowledgePutRequest {
    name: string;
}

export interface StatisticsAchievementsGetRequest {
    lang?: LanguageEnum;
    theme?: string;
}

export interface StatisticsAchievementsToAcknowledgeGetRequest {
    lang?: LanguageEnum;
    theme?: string;
}

export interface StatisticsListeningPostRequest {
    listeningEvent: Array<ListeningEvent>;
}

export interface StatisticsProjectChurchChurchGetRequest {
    church: string;
}

export interface StatisticsProjectProgressGetRequest {
    lang?: LanguageEnum;
    os?: string;
    theme?: string;
}

export interface StatisticsProjectProjectIdRulesGetRequest {
    projectId: number;
    lang?: LanguageEnum;
}

export interface StatisticsProjectRulesGetRequest {
    lang?: LanguageEnum;
    projectId?: number;
}

export interface StatisticsStreakpointPostRequest {
    streakPoint: Array<StreakPoint>;
}

export interface StatisticsTrackPlayedPostRequest {
    createTrackPlayedEventsCommandEvent: Array<CreateTrackPlayedEventsCommandEvent>;
}

export interface StatisticsV2ProjectProgressGetRequest {
    lang?: LanguageEnum;
    theme?: string;
}

export interface StatisticsWatchedPostRequest {
    processWatchedCommandEvent: Array<ProcessWatchedCommandEvent>;
}

/**
 * 
 */
export class StatisticsApi extends runtime.BaseAPI {

    /**
     */
    async statisticsAchievementDeleteRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/achievement`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async statisticsAchievementDelete(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.statisticsAchievementDeleteRaw(initOverrides);
    }

    /**
     */
    async statisticsAchievementIdGetRaw(requestParameters: StatisticsAchievementIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AchievementModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling statisticsAchievementIdGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        if (requestParameters.theme !== undefined) {
            queryParameters['theme'] = requestParameters.theme;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/achievement/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AchievementModelFromJSON(jsonValue));
    }

    /**
     */
    async statisticsAchievementIdGet(requestParameters: StatisticsAchievementIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AchievementModel> {
        const response = await this.statisticsAchievementIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsAchievementNameAcknowledgePutRaw(requestParameters: StatisticsAchievementNameAcknowledgePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling statisticsAchievementNameAcknowledgePut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/achievement/{name}/acknowledge`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async statisticsAchievementNameAcknowledgePut(requestParameters: StatisticsAchievementNameAcknowledgePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.statisticsAchievementNameAcknowledgePutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async statisticsAchievementsGetRaw(requestParameters: StatisticsAchievementsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentListIAchievementCollectionOrChapterHeader>> {
        const queryParameters: any = {};

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        if (requestParameters.theme !== undefined) {
            queryParameters['theme'] = requestParameters.theme;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/achievements`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentListIAchievementCollectionOrChapterHeaderFromJSON(jsonValue));
    }

    /**
     */
    async statisticsAchievementsGet(requestParameters: StatisticsAchievementsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentListIAchievementCollectionOrChapterHeader> {
        const response = await this.statisticsAchievementsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsAchievementsToAcknowledgeGetRaw(requestParameters: StatisticsAchievementsToAcknowledgeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AchievementModel>>> {
        const queryParameters: any = {};

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        if (requestParameters.theme !== undefined) {
            queryParameters['theme'] = requestParameters.theme;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/achievements/to/acknowledge`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AchievementModelFromJSON));
    }

    /**
     */
    async statisticsAchievementsToAcknowledgeGet(requestParameters: StatisticsAchievementsToAcknowledgeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AchievementModel>> {
        const response = await this.statisticsAchievementsToAcknowledgeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsFraKaareGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFraKaareStatisticsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/fra-kaare`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFraKaareStatisticsResponseFromJSON(jsonValue));
    }

    /**
     */
    async statisticsFraKaareGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFraKaareStatisticsResponse> {
        const response = await this.statisticsFraKaareGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsListeningPostRaw(requestParameters: StatisticsListeningPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.listeningEvent === null || requestParameters.listeningEvent === undefined) {
            throw new runtime.RequiredError('listeningEvent','Required parameter requestParameters.listeningEvent was null or undefined when calling statisticsListeningPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/Statistics/listening`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.listeningEvent.map(ListeningEventToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async statisticsListeningPost(requestParameters: StatisticsListeningPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.statisticsListeningPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async statisticsProjectChurchChurchGetRaw(requestParameters: StatisticsProjectChurchChurchGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectChurchStatisticsQueryChurchStatistics>> {
        if (requestParameters.church === null || requestParameters.church === undefined) {
            throw new runtime.RequiredError('church','Required parameter requestParameters.church was null or undefined when calling statisticsProjectChurchChurchGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/project/church/{church}`.replace(`{${"church"}}`, encodeURIComponent(String(requestParameters.church))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectChurchStatisticsQueryChurchStatisticsFromJSON(jsonValue));
    }

    /**
     */
    async statisticsProjectChurchChurchGet(requestParameters: StatisticsProjectChurchChurchGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectChurchStatisticsQueryChurchStatistics> {
        const response = await this.statisticsProjectChurchChurchGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsProjectChurchGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectChurchStatisticsQueryChurchStatistics>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/project/church`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectChurchStatisticsQueryChurchStatisticsFromJSON(jsonValue));
    }

    /**
     */
    async statisticsProjectChurchGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectChurchStatisticsQueryChurchStatistics> {
        const response = await this.statisticsProjectChurchGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsProjectProgressGetRaw(requestParameters: StatisticsProjectProgressGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ForbildePoints>> {
        const queryParameters: any = {};

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        if (requestParameters.os !== undefined) {
            queryParameters['os'] = requestParameters.os;
        }

        if (requestParameters.theme !== undefined) {
            queryParameters['theme'] = requestParameters.theme;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/project/progress`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ForbildePointsFromJSON(jsonValue));
    }

    /**
     */
    async statisticsProjectProgressGet(requestParameters: StatisticsProjectProgressGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ForbildePoints> {
        const response = await this.statisticsProjectProgressGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsProjectProjectIdRulesGetRaw(requestParameters: StatisticsProjectProjectIdRulesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRulesQueryRules>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling statisticsProjectProjectIdRulesGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/project/{projectId}/rules`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectRulesQueryRulesFromJSON(jsonValue));
    }

    /**
     */
    async statisticsProjectProjectIdRulesGet(requestParameters: StatisticsProjectProjectIdRulesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRulesQueryRules> {
        const response = await this.statisticsProjectProjectIdRulesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsProjectRulesGetRaw(requestParameters: StatisticsProjectRulesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRulesQueryRules>> {
        const queryParameters: any = {};

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        if (requestParameters.projectId !== undefined) {
            queryParameters['projectId'] = requestParameters.projectId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/project/rules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectRulesQueryRulesFromJSON(jsonValue));
    }

    /**
     */
    async statisticsProjectRulesGet(requestParameters: StatisticsProjectRulesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRulesQueryRules> {
        const response = await this.statisticsProjectRulesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsProjectStandingsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProjectStandingsProjectStandings>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/project/standings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetProjectStandingsProjectStandingsFromJSON(jsonValue));
    }

    /**
     */
    async statisticsProjectStandingsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProjectStandingsProjectStandings> {
        const response = await this.statisticsProjectStandingsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsStreakpointPostRaw(requestParameters: StatisticsStreakpointPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.streakPoint === null || requestParameters.streakPoint === undefined) {
            throw new runtime.RequiredError('streakPoint','Required parameter requestParameters.streakPoint was null or undefined when calling statisticsStreakpointPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/Statistics/streakpoint`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.streakPoint.map(StreakPointToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async statisticsStreakpointPost(requestParameters: StatisticsStreakpointPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.statisticsStreakpointPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async statisticsTrackPlayedPostRaw(requestParameters: StatisticsTrackPlayedPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.createTrackPlayedEventsCommandEvent === null || requestParameters.createTrackPlayedEventsCommandEvent === undefined) {
            throw new runtime.RequiredError('createTrackPlayedEventsCommandEvent','Required parameter requestParameters.createTrackPlayedEventsCommandEvent was null or undefined when calling statisticsTrackPlayedPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/Statistics/track/played`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createTrackPlayedEventsCommandEvent.map(CreateTrackPlayedEventsCommandEventToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async statisticsTrackPlayedPost(requestParameters: StatisticsTrackPlayedPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.statisticsTrackPlayedPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async statisticsV2ProjectProgressGetRaw(requestParameters: StatisticsV2ProjectProgressGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ForbildePoints>> {
        const queryParameters: any = {};

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        if (requestParameters.theme !== undefined) {
            queryParameters['theme'] = requestParameters.theme;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/v2/project/progress`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ForbildePointsFromJSON(jsonValue));
    }

    /**
     */
    async statisticsV2ProjectProgressGet(requestParameters: StatisticsV2ProjectProgressGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ForbildePoints> {
        const response = await this.statisticsV2ProjectProgressGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsWatchedPostRaw(requestParameters: StatisticsWatchedPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.processWatchedCommandEvent === null || requestParameters.processWatchedCommandEvent === undefined) {
            throw new runtime.RequiredError('processWatchedCommandEvent','Required parameter requestParameters.processWatchedCommandEvent was null or undefined when calling statisticsWatchedPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/Statistics/watched`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.processWatchedCommandEvent.map(ProcessWatchedCommandEventToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async statisticsWatchedPost(requestParameters: StatisticsWatchedPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.statisticsWatchedPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async statisticsYearInReviewFkGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/year-in-review/fk`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async statisticsYearInReviewFkGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.statisticsYearInReviewFkGetRaw(initOverrides);
    }

    /**
     */
    async statisticsYearInReviewHoursGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/year-in-review/hours`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async statisticsYearInReviewHoursGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.statisticsYearInReviewHoursGetRaw(initOverrides);
    }

    /**
     */
    async statisticsYearInReviewOverviewGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetYearInReviewOverviewSlide>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/year-in-review/overview`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetYearInReviewOverviewSlideFromJSON));
    }

    /**
     */
    async statisticsYearInReviewOverviewGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetYearInReviewOverviewSlide>> {
        const response = await this.statisticsYearInReviewOverviewGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async statisticsYearInReviewSongsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Statistics/year-in-review/songs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async statisticsYearInReviewSongsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.statisticsYearInReviewSongsGetRaw(initOverrides);
    }

}
