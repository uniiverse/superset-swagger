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
 * The DashboardRestApiGetListRole model module.
 * @module model/DashboardRestApiGetListRole
 * @version v1
 */
export class DashboardRestApiGetListRole {
  /**
   * Constructs a new <code>DashboardRestApiGetListRole</code>.
   * @alias module:model/DashboardRestApiGetListRole
   * @class
   * @param name {String} 
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>DashboardRestApiGetListRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardRestApiGetListRole} obj Optional instance to populate.
   * @return {module:model/DashboardRestApiGetListRole} The populated <code>DashboardRestApiGetListRole</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DashboardRestApiGetListRole();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
DashboardRestApiGetListRole.prototype.id = undefined;

/**
 * @member {String} name
 */
DashboardRestApiGetListRole.prototype.name = undefined;
