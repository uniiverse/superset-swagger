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
 * The CacheRestApiPost model module.
 * @module model/CacheRestApiPost
 * @version v1
 */
export class CacheRestApiPost {
  /**
   * Constructs a new <code>CacheRestApiPost</code>.
   * @alias module:model/CacheRestApiPost
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CacheRestApiPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CacheRestApiPost} obj Optional instance to populate.
   * @return {module:model/CacheRestApiPost} The populated <code>CacheRestApiPost</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CacheRestApiPost();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
CacheRestApiPost.prototype.id = undefined;
