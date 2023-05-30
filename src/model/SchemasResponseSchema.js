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
 * The SchemasResponseSchema model module.
 * @module model/SchemasResponseSchema
 * @version v1
 */
export class SchemasResponseSchema {
  /**
   * Constructs a new <code>SchemasResponseSchema</code>.
   * @alias module:model/SchemasResponseSchema
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SchemasResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SchemasResponseSchema} obj Optional instance to populate.
   * @return {module:model/SchemasResponseSchema} The populated <code>SchemasResponseSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SchemasResponseSchema();
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} result
 */
SchemasResponseSchema.prototype.result = undefined;

