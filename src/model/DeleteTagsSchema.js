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
 * The DeleteTagsSchema model module.
 * @module model/DeleteTagsSchema
 * @version v1
 */
export class DeleteTagsSchema extends Array {
  /**
   * Constructs a new <code>DeleteTagsSchema</code>.
   * @alias module:model/DeleteTagsSchema
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>DeleteTagsSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteTagsSchema} obj Optional instance to populate.
   * @return {module:model/DeleteTagsSchema} The populated <code>DeleteTagsSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeleteTagsSchema();
      ApiClient.constructFromObject(data, obj, 'String');
    }
    return obj;
  }
}
