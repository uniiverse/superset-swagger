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
import {DashboardRestApiPut} from './DashboardRestApiPut';

/**
 * The InlineResponse20026 model module.
 * @module model/InlineResponse20026
 * @version v1
 */
export class InlineResponse20026 {
  /**
   * Constructs a new <code>InlineResponse20026</code>.
   * @alias module:model/InlineResponse20026
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20026</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20026} obj Optional instance to populate.
   * @return {module:model/InlineResponse20026} The populated <code>InlineResponse20026</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20026();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('last_modified_time'))
        obj.lastModifiedTime = ApiClient.convertToType(data['last_modified_time'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = DashboardRestApiPut.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
InlineResponse20026.prototype.id = undefined;

/**
 * @member {Number} lastModifiedTime
 */
InlineResponse20026.prototype.lastModifiedTime = undefined;

/**
 * @member {module:model/DashboardRestApiPut} result
 */
InlineResponse20026.prototype.result = undefined;

