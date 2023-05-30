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
 * The EmbeddedDashboardConfig model module.
 * @module model/EmbeddedDashboardConfig
 * @version v1
 */
export class EmbeddedDashboardConfig {
  /**
   * Constructs a new <code>EmbeddedDashboardConfig</code>.
   * @alias module:model/EmbeddedDashboardConfig
   * @class
   * @param allowedDomains {Array.<String>} 
   */
  constructor(allowedDomains) {
    this.allowedDomains = allowedDomains;
  }

  /**
   * Constructs a <code>EmbeddedDashboardConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmbeddedDashboardConfig} obj Optional instance to populate.
   * @return {module:model/EmbeddedDashboardConfig} The populated <code>EmbeddedDashboardConfig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmbeddedDashboardConfig();
      if (data.hasOwnProperty('allowed_domains'))
        obj.allowedDomains = ApiClient.convertToType(data['allowed_domains'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} allowedDomains
 */
EmbeddedDashboardConfig.prototype.allowedDomains = undefined;

