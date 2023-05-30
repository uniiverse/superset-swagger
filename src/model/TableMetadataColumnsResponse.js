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
 * The TableMetadataColumnsResponse model module.
 * @module model/TableMetadataColumnsResponse
 * @version v1
 */
export class TableMetadataColumnsResponse {
  /**
   * Constructs a new <code>TableMetadataColumnsResponse</code>.
   * @alias module:model/TableMetadataColumnsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TableMetadataColumnsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TableMetadataColumnsResponse} obj Optional instance to populate.
   * @return {module:model/TableMetadataColumnsResponse} The populated <code>TableMetadataColumnsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TableMetadataColumnsResponse();
      if (data.hasOwnProperty('duplicates_constraint'))
        obj.duplicatesConstraint = ApiClient.convertToType(data['duplicates_constraint'], 'String');
      if (data.hasOwnProperty('keys'))
        obj.keys = ApiClient.convertToType(data['keys'], ['String']);
      if (data.hasOwnProperty('longType'))
        obj.longType = ApiClient.convertToType(data['longType'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} duplicatesConstraint
 */
TableMetadataColumnsResponse.prototype.duplicatesConstraint = undefined;

/**
 * @member {Array.<String>} keys
 */
TableMetadataColumnsResponse.prototype.keys = undefined;

/**
 * The actual backend long type for the column
 * @member {String} longType
 */
TableMetadataColumnsResponse.prototype.longType = undefined;

/**
 * The column name
 * @member {String} name
 */
TableMetadataColumnsResponse.prototype.name = undefined;

/**
 * The column type
 * @member {String} type
 */
TableMetadataColumnsResponse.prototype.type = undefined;

