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
import {ApiClient} from '../ApiClient';

/**
 * The ChartGetDatasourceObjectDataResponse model module.
 * @module model/ChartGetDatasourceObjectDataResponse
 * @version v1
 */
export class ChartGetDatasourceObjectDataResponse {
  /**
   * Constructs a new <code>ChartGetDatasourceObjectDataResponse</code>.
   * @alias module:model/ChartGetDatasourceObjectDataResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChartGetDatasourceObjectDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChartGetDatasourceObjectDataResponse} obj Optional instance to populate.
   * @return {module:model/ChartGetDatasourceObjectDataResponse} The populated <code>ChartGetDatasourceObjectDataResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChartGetDatasourceObjectDataResponse();
      if (data.hasOwnProperty('datasource_id'))
        obj.datasourceId = ApiClient.convertToType(data['datasource_id'], 'Number');
      if (data.hasOwnProperty('datasource_type'))
        obj.datasourceType = ApiClient.convertToType(data['datasource_type'], 'Number');
    }
    return obj;
  }
}

/**
 * The datasource identifier
 * @member {Number} datasourceId
 */
ChartGetDatasourceObjectDataResponse.prototype.datasourceId = undefined;

/**
 * The datasource type
 * @member {Number} datasourceType
 */
ChartGetDatasourceObjectDataResponse.prototype.datasourceType = undefined;
