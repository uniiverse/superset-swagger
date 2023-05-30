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
import {ChartGetDatasourceObjectResponse} from './ChartGetDatasourceObjectResponse';

/**
 * The ChartGetDatasourceResponseSchema model module.
 * @module model/ChartGetDatasourceResponseSchema
 * @version v1
 */
export class ChartGetDatasourceResponseSchema {
  /**
   * Constructs a new <code>ChartGetDatasourceResponseSchema</code>.
   * @alias module:model/ChartGetDatasourceResponseSchema
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChartGetDatasourceResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChartGetDatasourceResponseSchema} obj Optional instance to populate.
   * @return {module:model/ChartGetDatasourceResponseSchema} The populated <code>ChartGetDatasourceResponseSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChartGetDatasourceResponseSchema();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = ChartGetDatasourceObjectResponse.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * The total number of datasources
 * @member {Number} count
 */
ChartGetDatasourceResponseSchema.prototype.count = undefined;

/**
 * @member {module:model/ChartGetDatasourceObjectResponse} result
 */
ChartGetDatasourceResponseSchema.prototype.result = undefined;

