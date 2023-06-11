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
 * @interface ChartRestApiPut
 */
export interface ChartRestApiPut {
    /**
     * Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.
     * @type {number}
     * @memberof ChartRestApiPut
     */
    cacheTimeout?: number | null;
    /**
     * Details of the certification
     * @type {string}
     * @memberof ChartRestApiPut
     */
    certificationDetails?: string | null;
    /**
     * Person or group that has certified this chart
     * @type {string}
     * @memberof ChartRestApiPut
     */
    certifiedBy?: string | null;
    /**
     *
     * @type {Array<number>}
     * @memberof ChartRestApiPut
     */
    dashboards?: Array<number>;
    /**
     * The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_id` and `datasource_type`.
     * @type {number}
     * @memberof ChartRestApiPut
     */
    datasourceId?: number | null;
    /**
     * The type of dataset/datasource identified on `datasource_id`.
     * @type {string}
     * @memberof ChartRestApiPut
     */
    datasourceType?: ChartRestApiPutDatasourceTypeEnum;
    /**
     * A description of the chart propose.
     * @type {string}
     * @memberof ChartRestApiPut
     */
    description?: string | null;
    /**
     *
     * @type {string}
     * @memberof ChartRestApiPut
     */
    externalUrl?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof ChartRestApiPut
     */
    isManagedExternally?: boolean | null;
    /**
     *
     * @type {Array<number>}
     * @memberof ChartRestApiPut
     */
    owners?: Array<number>;
    /**
     * Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.
     * @type {string}
     * @memberof ChartRestApiPut
     */
    params?: string | null;
    /**
     * The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.
     * @type {string}
     * @memberof ChartRestApiPut
     */
    queryContext?: string | null;
    /**
     * The query context generation represents whether the query_contextis user generated or not so that it does not update user modfiedstate.
     * @type {boolean}
     * @memberof ChartRestApiPut
     */
    queryContextGeneration?: boolean | null;
    /**
     * The name of the chart.
     * @type {string}
     * @memberof ChartRestApiPut
     */
    sliceName?: string | null;
    /**
     * The type of chart visualization used.
     * @type {string}
     * @memberof ChartRestApiPut
     */
    vizType?: string | null;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ChartRestApiPutDatasourceTypeEnum {
    SlTable = "sl_table",
    Table = "table",
    Dataset = "dataset",
    Query = "query",
    SavedQuery = "saved_query",
    View = "view"
}