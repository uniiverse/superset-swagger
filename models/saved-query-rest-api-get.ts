/* tslint:disable */
/* eslint-disable */
/**
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SavedQueryRestApiGetDatabase } from './saved-query-rest-api-get-database';
import { SavedQueryRestApiGetUser } from './saved-query-rest-api-get-user';
/**
 * 
 * @export
 * @interface SavedQueryRestApiGet
 */
export interface SavedQueryRestApiGet {
    /**
     * 
     * @type {any}
     * @memberof SavedQueryRestApiGet
     */
    changedOnDeltaHumanized?: any;
    /**
     * 
     * @type {SavedQueryRestApiGetUser}
     * @memberof SavedQueryRestApiGet
     */
    createdBy?: SavedQueryRestApiGetUser;
    /**
     * 
     * @type {SavedQueryRestApiGetDatabase}
     * @memberof SavedQueryRestApiGet
     */
    database?: SavedQueryRestApiGetDatabase;
    /**
     * 
     * @type {string}
     * @memberof SavedQueryRestApiGet
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SavedQueryRestApiGet
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SavedQueryRestApiGet
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SavedQueryRestApiGet
     */
    schema?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SavedQueryRestApiGet
     */
    sql?: string | null;
    /**
     * 
     * @type {any}
     * @memberof SavedQueryRestApiGet
     */
    sqlTables?: any;
    /**
     * 
     * @type {string}
     * @memberof SavedQueryRestApiGet
     */
    templateParameters?: string | null;
}