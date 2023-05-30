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
 * The Tag model module.
 * @module model/Tag
 * @version v1
 */
export class Tag {
  /**
   * Constructs a new <code>Tag</code>.
   * @alias module:model/Tag
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tag} obj Optional instance to populate.
   * @return {module:model/Tag} The populated <code>Tag</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Tag();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Tag.prototype.id = undefined;

/**
 * @member {String} name
 */
Tag.prototype.name = undefined;

/**
 * @member {Object} type
 */
Tag.prototype.type = undefined;

