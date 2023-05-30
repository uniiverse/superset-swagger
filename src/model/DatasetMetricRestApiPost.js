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
 * The DatasetMetricRestApiPost model module.
 * @module model/DatasetMetricRestApiPost
 * @version v1
 */
export class DatasetMetricRestApiPost {
  /**
   * Constructs a new <code>DatasetMetricRestApiPost</code>.
   * @alias module:model/DatasetMetricRestApiPost
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DatasetMetricRestApiPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatasetMetricRestApiPost} obj Optional instance to populate.
   * @return {module:model/DatasetMetricRestApiPost} The populated <code>DatasetMetricRestApiPost</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatasetMetricRestApiPost();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
DatasetMetricRestApiPost.prototype.id = undefined;

