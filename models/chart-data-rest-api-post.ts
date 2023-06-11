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
 * @interface ChartDataRestApiPost
 */
export interface ChartDataRestApiPost {
    /**
     * Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.
     * @type {number}
     * @memberof ChartDataRestApiPost
     */
    cacheTimeout?: number | null;
    /**
     * Details of the certification
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    certificationDetails?: string | null;
    /**
     * Person or group that has certified this chart
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    certifiedBy?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof ChartDataRestApiPost
     */
    dashboards?: Array<number>;
    /**
     * The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_id` and `datasource_type`.
     * @type {number}
     * @memberof ChartDataRestApiPost
     */
    datasourceId: number;
    /**
     * The datasource name.
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    datasourceName?: string | null;
    /**
     * The type of dataset/datasource identified on `datasource_id`.
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    datasourceType: ChartDataRestApiPostDatasourceTypeEnum;
    /**
     * A description of the chart propose.
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    externalUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ChartDataRestApiPost
     */
    isManagedExternally?: boolean | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof ChartDataRestApiPost
     */
    owners?: Array<number>;
    /**
     * Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    params?: string | null;
    /**
     * The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    queryContext?: string | null;
    /**
     * The query context generation represents whether the query_contextis user generated or not so that it does not update user modfiedstate.
     * @type {boolean}
     * @memberof ChartDataRestApiPost
     */
    queryContextGeneration?: boolean | null;
    /**
     * The name of the chart.
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    sliceName: string;
    /**
     * The type of chart visualization used.
     * @type {string}
     * @memberof ChartDataRestApiPost
     */
    vizType?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ChartDataRestApiPostDatasourceTypeEnum {
    SlTable = 'sl_table',
    Table = 'table',
    Dataset = 'dataset',
    Query = 'query',
    SavedQuery = 'saved_query',
    View = 'view'
}
