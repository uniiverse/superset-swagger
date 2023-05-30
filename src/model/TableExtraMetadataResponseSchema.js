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
 * The TableExtraMetadataResponseSchema model module.
 * @module model/TableExtraMetadataResponseSchema
 * @version v1
 */
export class TableExtraMetadataResponseSchema {
  /**
   * Constructs a new <code>TableExtraMetadataResponseSchema</code>.
   * @alias module:model/TableExtraMetadataResponseSchema
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TableExtraMetadataResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TableExtraMetadataResponseSchema} obj Optional instance to populate.
   * @return {module:model/TableExtraMetadataResponseSchema} The populated <code>TableExtraMetadataResponseSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TableExtraMetadataResponseSchema();
      if (data.hasOwnProperty('clustering'))
        obj.clustering = ApiClient.convertToType(data['clustering'], Object);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
      if (data.hasOwnProperty('partitions'))
        obj.partitions = ApiClient.convertToType(data['partitions'], Object);
    }
    return obj;
  }
}

/**
 * @member {Object} clustering
 */
TableExtraMetadataResponseSchema.prototype.clustering = undefined;

/**
 * @member {Object} metadata
 */
TableExtraMetadataResponseSchema.prototype.metadata = undefined;

/**
 * @member {Object} partitions
 */
TableExtraMetadataResponseSchema.prototype.partitions = undefined;

