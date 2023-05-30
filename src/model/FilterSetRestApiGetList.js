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
 * The FilterSetRestApiGetList model module.
 * @module model/FilterSetRestApiGetList
 * @version v1
 */
export class FilterSetRestApiGetList {
  /**
   * Constructs a new <code>FilterSetRestApiGetList</code>.
   * @alias module:model/FilterSetRestApiGetList
   * @class
   * @param name {String} 
   * @param ownerId {Number} 
   * @param ownerType {String} 
   */
  constructor(name, ownerId, ownerType) {
    this.name = name;
    this.ownerId = ownerId;
    this.ownerType = ownerType;
  }

  /**
   * Constructs a <code>FilterSetRestApiGetList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilterSetRestApiGetList} obj Optional instance to populate.
   * @return {module:model/FilterSetRestApiGetList} The populated <code>FilterSetRestApiGetList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FilterSetRestApiGetList();
      if (data.hasOwnProperty('changed_by_fk'))
        obj.changedByFk = ApiClient.convertToType(data['changed_by_fk'], 'Number');
      if (data.hasOwnProperty('changed_on'))
        obj.changedOn = ApiClient.convertToType(data['changed_on'], 'Date');
      if (data.hasOwnProperty('created_by_fk'))
        obj.createdByFk = ApiClient.convertToType(data['created_by_fk'], 'Number');
      if (data.hasOwnProperty('created_on'))
        obj.createdOn = ApiClient.convertToType(data['created_on'], 'Date');
      if (data.hasOwnProperty('dashboard_id'))
        obj.dashboardId = ApiClient.convertToType(data['dashboard_id'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('owner_id'))
        obj.ownerId = ApiClient.convertToType(data['owner_id'], 'Number');
      if (data.hasOwnProperty('owner_type'))
        obj.ownerType = ApiClient.convertToType(data['owner_type'], 'String');
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} changedByFk
 */
FilterSetRestApiGetList.prototype.changedByFk = undefined;

/**
 * @member {Date} changedOn
 */
FilterSetRestApiGetList.prototype.changedOn = undefined;

/**
 * @member {Number} createdByFk
 */
FilterSetRestApiGetList.prototype.createdByFk = undefined;

/**
 * @member {Date} createdOn
 */
FilterSetRestApiGetList.prototype.createdOn = undefined;

/**
 * @member {Number} dashboardId
 */
FilterSetRestApiGetList.prototype.dashboardId = undefined;

/**
 * @member {String} description
 */
FilterSetRestApiGetList.prototype.description = undefined;

/**
 * @member {Number} id
 */
FilterSetRestApiGetList.prototype.id = undefined;

/**
 * @member {String} name
 */
FilterSetRestApiGetList.prototype.name = undefined;

/**
 * @member {Number} ownerId
 */
FilterSetRestApiGetList.prototype.ownerId = undefined;

/**
 * @member {String} ownerType
 */
FilterSetRestApiGetList.prototype.ownerType = undefined;

/**
 * @member {Object} params
 */
FilterSetRestApiGetList.prototype.params = undefined;

