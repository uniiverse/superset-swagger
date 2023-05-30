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
 * The ReportExecutionLogRestApiGetList model module.
 * @module model/ReportExecutionLogRestApiGetList
 * @version v1
 */
export class ReportExecutionLogRestApiGetList {
  /**
   * Constructs a new <code>ReportExecutionLogRestApiGetList</code>.
   * @alias module:model/ReportExecutionLogRestApiGetList
   * @class
   * @param scheduledDttm {Date} 
   * @param state {String} 
   */
  constructor(scheduledDttm, state) {
    this.scheduledDttm = scheduledDttm;
    this.state = state;
  }

  /**
   * Constructs a <code>ReportExecutionLogRestApiGetList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportExecutionLogRestApiGetList} obj Optional instance to populate.
   * @return {module:model/ReportExecutionLogRestApiGetList} The populated <code>ReportExecutionLogRestApiGetList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReportExecutionLogRestApiGetList();
      if (data.hasOwnProperty('end_dttm'))
        obj.endDttm = ApiClient.convertToType(data['end_dttm'], 'Date');
      if (data.hasOwnProperty('error_message'))
        obj.errorMessage = ApiClient.convertToType(data['error_message'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('scheduled_dttm'))
        obj.scheduledDttm = ApiClient.convertToType(data['scheduled_dttm'], 'Date');
      if (data.hasOwnProperty('start_dttm'))
        obj.startDttm = ApiClient.convertToType(data['start_dttm'], 'Date');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('value_row_json'))
        obj.valueRowJson = ApiClient.convertToType(data['value_row_json'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} endDttm
 */
ReportExecutionLogRestApiGetList.prototype.endDttm = undefined;

/**
 * @member {String} errorMessage
 */
ReportExecutionLogRestApiGetList.prototype.errorMessage = undefined;

/**
 * @member {Number} id
 */
ReportExecutionLogRestApiGetList.prototype.id = undefined;

/**
 * @member {Date} scheduledDttm
 */
ReportExecutionLogRestApiGetList.prototype.scheduledDttm = undefined;

/**
 * @member {Date} startDttm
 */
ReportExecutionLogRestApiGetList.prototype.startDttm = undefined;

/**
 * @member {String} state
 */
ReportExecutionLogRestApiGetList.prototype.state = undefined;

/**
 * @member {String} uuid
 */
ReportExecutionLogRestApiGetList.prototype.uuid = undefined;

/**
 * @member {Number} value
 */
ReportExecutionLogRestApiGetList.prototype.value = undefined;

/**
 * @member {String} valueRowJson
 */
ReportExecutionLogRestApiGetList.prototype.valueRowJson = undefined;

