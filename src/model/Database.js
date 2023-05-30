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
 * The Database model module.
 * @module model/Database
 * @version v1
 */
export class Database {
  /**
   * Constructs a new <code>Database</code>.
   * @alias module:model/Database
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Database</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Database} obj Optional instance to populate.
   * @return {module:model/Database} The populated <code>Database</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Database();
      if (data.hasOwnProperty('allows_cost_estimate'))
        obj.allowsCostEstimate = ApiClient.convertToType(data['allows_cost_estimate'], 'Boolean');
      if (data.hasOwnProperty('allows_subquery'))
        obj.allowsSubquery = ApiClient.convertToType(data['allows_subquery'], 'Boolean');
      if (data.hasOwnProperty('allows_virtual_table_explore'))
        obj.allowsVirtualTableExplore = ApiClient.convertToType(data['allows_virtual_table_explore'], 'Boolean');
      if (data.hasOwnProperty('backend'))
        obj.backend = ApiClient.convertToType(data['backend'], 'String');
      if (data.hasOwnProperty('disable_data_preview'))
        obj.disableDataPreview = ApiClient.convertToType(data['disable_data_preview'], 'Boolean');
      if (data.hasOwnProperty('explore_database_id'))
        obj.exploreDatabaseId = ApiClient.convertToType(data['explore_database_id'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} allowsCostEstimate
 */
Database.prototype.allowsCostEstimate = undefined;

/**
 * @member {Boolean} allowsSubquery
 */
Database.prototype.allowsSubquery = undefined;

/**
 * @member {Boolean} allowsVirtualTableExplore
 */
Database.prototype.allowsVirtualTableExplore = undefined;

/**
 * @member {String} backend
 */
Database.prototype.backend = undefined;

/**
 * @member {Boolean} disableDataPreview
 */
Database.prototype.disableDataPreview = undefined;

/**
 * @member {Number} exploreDatabaseId
 */
Database.prototype.exploreDatabaseId = undefined;

/**
 * @member {Number} id
 */
Database.prototype.id = undefined;

/**
 * @member {String} name
 */
Database.prototype.name = undefined;

