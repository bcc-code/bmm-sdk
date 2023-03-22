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
import type { Role } from './Role';
import {
    RoleFromJSON,
    RoleFromJSONTyped,
    RoleToJSON,
} from './Role';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    token?: string | null;
    /**
     * 
     * @type {Array<Role>}
     * @memberof User
     */
    roles?: Array<Role> | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly type?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    meta?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    personId?: number;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    dateCreated?: Date | null;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'roles': !exists(json, 'roles') ? undefined : (json['roles'] === null ? null : (json['roles'] as Array<any>).map(RoleFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'meta': !exists(json, '_meta') ? undefined : json['_meta'],
        'personId': !exists(json, 'person_id') ? undefined : json['person_id'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (json['date_created'] === null ? null : new Date(json['date_created'])),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'token': value.token,
        'roles': value.roles === undefined ? undefined : (value.roles === null ? null : (value.roles as Array<any>).map(RoleToJSON)),
        '_meta': value.meta,
        'person_id': value.personId,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated === null ? null : value.dateCreated.toISOString()),
    };
}

