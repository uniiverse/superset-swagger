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
 * The DatasetRestApiGetSqlMetric model module.
 * @module model/DatasetRestApiGetSqlMetric
 * @version v1
 */
export class DatasetRestApiGetSqlMetric {
  /**
   * Constructs a new <code>DatasetRestApiGetSqlMetric</code>.
   * @alias module:model/DatasetRestApiGetSqlMetric
   * @class
   * @param expression {String} 
   * @param metricName {String} 
   */
  constructor(expression, metricName) {
    this.expression = expression;
    this.metricName = metricName;
  }

  /**
   * Constructs a <code>DatasetRestApiGetSqlMetric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatasetRestApiGetSqlMetric} obj Optional instance to populate.
   * @return {module:model/DatasetRestApiGetSqlMetric} The populated <code>DatasetRestApiGetSqlMetric</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatasetRestApiGetSqlMetric();
      if (data.hasOwnProperty('changed_on'))
        obj.changedOn = ApiClient.convertToType(data['changed_on'], 'Date');
      if (data.hasOwnProperty('created_on'))
        obj.createdOn = ApiClient.convertToType(data['created_on'], 'Date');
      if (data.hasOwnProperty('d3format'))
        obj.d3format = ApiClient.convertToType(data['d3format'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('expression'))
        obj.expression = ApiClient.convertToType(data['expression'], 'String');
      if (data.hasOwnProperty('extra'))
        obj.extra = ApiClient.convertToType(data['extra'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('metric_name'))
        obj.metricName = ApiClient.convertToType(data['metric_name'], 'String');
      if (data.hasOwnProperty('metric_type'))
        obj.metricType = ApiClient.convertToType(data['metric_type'], 'String');
      if (data.hasOwnProperty('verbose_name'))
        obj.verboseName = ApiClient.convertToType(data['verbose_name'], 'String');
      if (data.hasOwnProperty('warning_text'))
        obj.warningText = ApiClient.convertToType(data['warning_text'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} changedOn
 */
DatasetRestApiGetSqlMetric.prototype.changedOn = undefined;

/**
 * @member {Date} createdOn
 */
DatasetRestApiGetSqlMetric.prototype.createdOn = undefined;

/**
 * @member {String} d3format
 */
DatasetRestApiGetSqlMetric.prototype.d3format = undefined;

/**
 * @member {String} description
 */
DatasetRestApiGetSqlMetric.prototype.description = undefined;

/**
 * @member {String} expression
 */
DatasetRestApiGetSqlMetric.prototype.expression = undefined;

/**
 * @member {String} extra
 */
DatasetRestApiGetSqlMetric.prototype.extra = undefined;

/**
 * @member {Number} id
 */
DatasetRestApiGetSqlMetric.prototype.id = undefined;

/**
 * @member {String} metricName
 */
DatasetRestApiGetSqlMetric.prototype.metricName = undefined;

/**
 * @member {String} metricType
 */
DatasetRestApiGetSqlMetric.prototype.metricType = undefined;

/**
 * @member {String} verboseName
 */
DatasetRestApiGetSqlMetric.prototype.verboseName = undefined;

/**
 * @member {String} warningText
 */
DatasetRestApiGetSqlMetric.prototype.warningText = undefined;

