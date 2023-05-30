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
 * The InlineResponse20060 model module.
 * @module model/InlineResponse20060
 * @version v1
 */
export class InlineResponse20060 {
  /**
   * Constructs a new <code>InlineResponse20060</code>.
   * @alias module:model/InlineResponse20060
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20060</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20060} obj Optional instance to populate.
   * @return {module:model/InlineResponse20060} The populated <code>InlineResponse20060</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20060();
      if (data.hasOwnProperty('access_token'))
        obj.accessToken = ApiClient.convertToType(data['access_token'], 'String');
      if (data.hasOwnProperty('refresh_token'))
        obj.refreshToken = ApiClient.convertToType(data['refresh_token'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} accessToken
 */
InlineResponse20060.prototype.accessToken = undefined;

/**
 * @member {String} refreshToken
 */
InlineResponse20060.prototype.refreshToken = undefined;

