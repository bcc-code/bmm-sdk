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
  SubscriptionModel,
} from '../models';
import {
    SubscriptionModelFromJSON,
    SubscriptionModelToJSON,
} from '../models';

export interface NotificationsDeviceIdDeleteRequest {
    deviceId: string;
}

export interface NotificationsDeviceIdPutRequest {
    deviceId: string;
    subscriptionModel?: SubscriptionModel;
}

export interface SubscriptionDeviceIdDeleteRequest {
    deviceId: string;
}

export interface SubscriptionDeviceIdPutRequest {
    deviceId: string;
    subscriptionModel?: SubscriptionModel;
}

/**
 * 
 */
export class SubscriptionApi extends runtime.BaseAPI {

    /**
     */
    async notificationsDeviceIdDeleteRaw(requestParameters: NotificationsDeviceIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling notificationsDeviceIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Notifications/{deviceId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async notificationsDeviceIdDelete(requestParameters: NotificationsDeviceIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.notificationsDeviceIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async notificationsDeviceIdPutRaw(requestParameters: NotificationsDeviceIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling notificationsDeviceIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/Notifications/{deviceId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionModelToJSON(requestParameters.subscriptionModel),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async notificationsDeviceIdPut(requestParameters: NotificationsDeviceIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.notificationsDeviceIdPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async subscriptionDeviceIdDeleteRaw(requestParameters: SubscriptionDeviceIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling subscriptionDeviceIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Subscription/{deviceId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async subscriptionDeviceIdDelete(requestParameters: SubscriptionDeviceIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscriptionDeviceIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async subscriptionDeviceIdPutRaw(requestParameters: SubscriptionDeviceIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
            throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling subscriptionDeviceIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/Subscription/{deviceId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionModelToJSON(requestParameters.subscriptionModel),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async subscriptionDeviceIdPut(requestParameters: SubscriptionDeviceIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscriptionDeviceIdPutRaw(requestParameters, initOverrides);
    }

}