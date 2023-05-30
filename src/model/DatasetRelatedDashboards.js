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
import {DatasetRelatedDashboard} from './DatasetRelatedDashboard';

/**
 * The DatasetRelatedDashboards model module.
 * @module model/DatasetRelatedDashboards
 * @version v1
 */
export class DatasetRelatedDashboards {
  /**
   * Constructs a new <code>DatasetRelatedDashboards</code>.
   * @alias module:model/DatasetRelatedDashboards
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DatasetRelatedDashboards</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatasetRelatedDashboards} obj Optional instance to populate.
   * @return {module:model/DatasetRelatedDashboards} The populated <code>DatasetRelatedDashboards</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatasetRelatedDashboards();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], [DatasetRelatedDashboard]);
    }
    return obj;
  }
}

/**
 * Dashboard count
 * @member {Number} count
 */
DatasetRelatedDashboards.prototype.count = undefined;

/**
 * A list of dashboards
 * @member {Array.<module:model/DatasetRelatedDashboard>} result
 */
DatasetRelatedDashboards.prototype.result = undefined;

