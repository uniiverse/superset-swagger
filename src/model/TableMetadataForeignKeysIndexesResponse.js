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
import {TableMetadataOptionsResponse} from './TableMetadataOptionsResponse';

/**
 * The TableMetadataForeignKeysIndexesResponse model module.
 * @module model/TableMetadataForeignKeysIndexesResponse
 * @version v1
 */
export class TableMetadataForeignKeysIndexesResponse {
  /**
   * Constructs a new <code>TableMetadataForeignKeysIndexesResponse</code>.
   * @alias module:model/TableMetadataForeignKeysIndexesResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TableMetadataForeignKeysIndexesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TableMetadataForeignKeysIndexesResponse} obj Optional instance to populate.
   * @return {module:model/TableMetadataForeignKeysIndexesResponse} The populated <code>TableMetadataForeignKeysIndexesResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TableMetadataForeignKeysIndexesResponse();
      if (data.hasOwnProperty('column_names'))
        obj.columnNames = ApiClient.convertToType(data['column_names'], ['String']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('options'))
        obj.options = TableMetadataOptionsResponse.constructFromObject(data['options']);
      if (data.hasOwnProperty('referred_columns'))
        obj.referredColumns = ApiClient.convertToType(data['referred_columns'], ['String']);
      if (data.hasOwnProperty('referred_schema'))
        obj.referredSchema = ApiClient.convertToType(data['referred_schema'], 'String');
      if (data.hasOwnProperty('referred_table'))
        obj.referredTable = ApiClient.convertToType(data['referred_table'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} columnNames
 */
TableMetadataForeignKeysIndexesResponse.prototype.columnNames = undefined;

/**
 * The name of the foreign key or index
 * @member {String} name
 */
TableMetadataForeignKeysIndexesResponse.prototype.name = undefined;

/**
 * @member {module:model/TableMetadataOptionsResponse} options
 */
TableMetadataForeignKeysIndexesResponse.prototype.options = undefined;

/**
 * @member {Array.<String>} referredColumns
 */
TableMetadataForeignKeysIndexesResponse.prototype.referredColumns = undefined;

/**
 * @member {String} referredSchema
 */
TableMetadataForeignKeysIndexesResponse.prototype.referredSchema = undefined;

/**
 * @member {String} referredTable
 */
TableMetadataForeignKeysIndexesResponse.prototype.referredTable = undefined;

/**
 * @member {String} type
 */
TableMetadataForeignKeysIndexesResponse.prototype.type = undefined;
