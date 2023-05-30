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
 * The DatasetMetricRestApiGet model module.
 * @module model/DatasetMetricRestApiGet
 * @version v1
 */
export class DatasetMetricRestApiGet {
  /**
   * Constructs a new <code>DatasetMetricRestApiGet</code>.
   * @alias module:model/DatasetMetricRestApiGet
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DatasetMetricRestApiGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatasetMetricRestApiGet} obj Optional instance to populate.
   * @return {module:model/DatasetMetricRestApiGet} The populated <code>DatasetMetricRestApiGet</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatasetMetricRestApiGet();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
DatasetMetricRestApiGet.prototype.id = undefined;

