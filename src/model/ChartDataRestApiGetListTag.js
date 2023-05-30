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
 * The ChartDataRestApiGetListTag model module.
 * @module model/ChartDataRestApiGetListTag
 * @version v1
 */
export class ChartDataRestApiGetListTag {
  /**
   * Constructs a new <code>ChartDataRestApiGetListTag</code>.
   * @alias module:model/ChartDataRestApiGetListTag
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChartDataRestApiGetListTag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChartDataRestApiGetListTag} obj Optional instance to populate.
   * @return {module:model/ChartDataRestApiGetListTag} The populated <code>ChartDataRestApiGetListTag</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChartDataRestApiGetListTag();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
ChartDataRestApiGetListTag.prototype.id = undefined;

/**
 * @member {String} name
 */
ChartDataRestApiGetListTag.prototype.name = undefined;

/**
 * @member {Object} type
 */
ChartDataRestApiGetListTag.prototype.type = undefined;

