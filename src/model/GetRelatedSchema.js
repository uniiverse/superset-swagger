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
 * The GetRelatedSchema model module.
 * @module model/GetRelatedSchema
 * @version v1
 */
export class GetRelatedSchema {
  /**
   * Constructs a new <code>GetRelatedSchema</code>.
   * @alias module:model/GetRelatedSchema
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetRelatedSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRelatedSchema} obj Optional instance to populate.
   * @return {module:model/GetRelatedSchema} The populated <code>GetRelatedSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetRelatedSchema();
      if (data.hasOwnProperty('filter'))
        obj.filter = ApiClient.convertToType(data['filter'], 'String');
      if (data.hasOwnProperty('include_ids'))
        obj.includeIds = ApiClient.convertToType(data['include_ids'], ['Number']);
      if (data.hasOwnProperty('page'))
        obj.page = ApiClient.convertToType(data['page'], 'Number');
      if (data.hasOwnProperty('page_size'))
        obj.pageSize = ApiClient.convertToType(data['page_size'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} filter
 */
GetRelatedSchema.prototype.filter = undefined;

/**
 * @member {Array.<Number>} includeIds
 */
GetRelatedSchema.prototype.includeIds = undefined;

/**
 * @member {Number} page
 */
GetRelatedSchema.prototype.page = undefined;

/**
 * @member {Number} pageSize
 */
GetRelatedSchema.prototype.pageSize = undefined;

