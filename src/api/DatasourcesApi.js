/*
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {InlineResponse20038} from '../model/InlineResponse20038';
import {InlineResponse400} from '../model/InlineResponse400';

/**
* Datasources service.
* @module api/DatasourcesApi
* @version v1
*/
export class DatasourcesApi {

    /**
    * Constructs a new DatasourcesApi. 
    * @alias module:api/DatasourcesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet operation.
     * @callback moduleapi/DatasourcesApi~apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20038{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get possible values for a datasource column
     * @param {String} datasourceType The type of datasource
     * @param {Number} datasourceId The id of the datasource
     * @param {String} columnName The name of the column to get values for
     * @param {module:api/DatasourcesApi~apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet(datasourceType, datasourceId, columnName, callback) {
      
      let postBody = null;
      // verify the required parameter 'datasourceType' is set
      if (datasourceType === undefined || datasourceType === null) {
        throw new Error("Missing the required parameter 'datasourceType' when calling apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet");
      }
      // verify the required parameter 'datasourceId' is set
      if (datasourceId === undefined || datasourceId === null) {
        throw new Error("Missing the required parameter 'datasourceId' when calling apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet");
      }
      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet");
      }

      let pathParams = {
        'datasource_type': datasourceType,'datasource_id': datasourceId,'column_name': columnName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20038;

      return this.apiClient.callApi(
        '/api/v1/datasource/{datasource_type}/{datasource_id}/column/{column_name}/values/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}