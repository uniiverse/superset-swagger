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
import {EmbeddedDashboardResponseSchema} from './EmbeddedDashboardResponseSchema';

/**
 * The InlineResponse20025 model module.
 * @module model/InlineResponse20025
 * @version v1
 */
export class InlineResponse20025 {
  /**
   * Constructs a new <code>InlineResponse20025</code>.
   * @alias module:model/InlineResponse20025
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20025</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20025} obj Optional instance to populate.
   * @return {module:model/InlineResponse20025} The populated <code>InlineResponse20025</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20025();
      if (data.hasOwnProperty('result'))
        obj.result = EmbeddedDashboardResponseSchema.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * @member {module:model/EmbeddedDashboardResponseSchema} result
 */
InlineResponse20025.prototype.result = undefined;
