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
/**
 * 
 * @export
 * @interface DatasetRestApiGetTableColumn
 */
export interface DatasetRestApiGetTableColumn {
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetTableColumn
     */
    advancedDataType?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof DatasetRestApiGetTableColumn
     */
    changedOn?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetTableColumn
     */
    columnName: string;
    /**
     * 
     * @type {Date}
     * @memberof DatasetRestApiGetTableColumn
     */
    createdOn?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetTableColumn
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetTableColumn
     */
    expression?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetTableColumn
     */
    extra?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiGetTableColumn
     */
    filterable?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiGetTableColumn
     */
    groupby?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof DatasetRestApiGetTableColumn
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiGetTableColumn
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiGetTableColumn
     */
    isDttm?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetTableColumn
     */
    pythonDateFormat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetTableColumn
     */
    type?: string | null;
    /**
     * 
     * @type {any}
     * @memberof DatasetRestApiGetTableColumn
     */
    typeGeneric?: any;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetTableColumn
     */
    uuid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetTableColumn
     */
    verboseName?: string | null;
}