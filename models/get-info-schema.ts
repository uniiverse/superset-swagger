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
import { GetInfoSchemaAddColumns } from './get-info-schema-add-columns';
/**
 * 
 * @export
 * @interface GetInfoSchema
 */
export interface GetInfoSchema {
    /**
     * 
     * @type {{ [key: string]: GetInfoSchemaAddColumns; }}
     * @memberof GetInfoSchema
     */
    addColumns?: { [key: string]: GetInfoSchemaAddColumns; };
    /**
     * 
     * @type {{ [key: string]: GetInfoSchemaAddColumns; }}
     * @memberof GetInfoSchema
     */
    editColumns?: { [key: string]: GetInfoSchemaAddColumns; };
    /**
     * 
     * @type {Array<string>}
     * @memberof GetInfoSchema
     */
    keys?: Array<GetInfoSchemaKeysEnum>;
}

/**
    * @export
    * @enum {string}
    */
export enum GetInfoSchemaKeysEnum {
    AddColumns = 'add_columns',
    EditColumns = 'edit_columns',
    Filters = 'filters',
    Permissions = 'permissions',
    AddTitle = 'add_title',
    EditTitle = 'edit_title',
    None = 'none'
}
