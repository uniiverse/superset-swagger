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
import {InlineResponse20043Result} from './InlineResponse20043Result';

/**
 * The InlineResponse20043 model module.
 * @module model/InlineResponse20043
 * @version v1
 */
export class InlineResponse20043 {
  /**
   * Constructs a new <code>InlineResponse20043</code>.
   * @alias module:model/InlineResponse20043
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20043</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20043} obj Optional instance to populate.
   * @return {module:model/InlineResponse20043} The populated <code>InlineResponse20043</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20043();
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], [InlineResponse20043Result]);
    }
    return obj;
  }
}

/**
 * Menu items in a forest like data structure
 * @member {Array.<module:model/InlineResponse20043Result>} result
 */
InlineResponse20043.prototype.result = undefined;

