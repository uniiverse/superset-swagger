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
import {DatabaseRelatedChart} from './DatabaseRelatedChart';

/**
 * The DatabaseRelatedCharts model module.
 * @module model/DatabaseRelatedCharts
 * @version v1
 */
export class DatabaseRelatedCharts {
  /**
   * Constructs a new <code>DatabaseRelatedCharts</code>.
   * @alias module:model/DatabaseRelatedCharts
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DatabaseRelatedCharts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatabaseRelatedCharts} obj Optional instance to populate.
   * @return {module:model/DatabaseRelatedCharts} The populated <code>DatabaseRelatedCharts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatabaseRelatedCharts();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], [DatabaseRelatedChart]);
    }
    return obj;
  }
}

/**
 * Chart count
 * @member {Number} count
 */
DatabaseRelatedCharts.prototype.count = undefined;

/**
 * A list of dashboards
 * @member {Array.<module:model/DatabaseRelatedChart>} result
 */
DatabaseRelatedCharts.prototype.result = undefined;

