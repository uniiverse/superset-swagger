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
import {User} from './User';

/**
 * The TaggedObjectEntityResponseSchema model module.
 * @module model/TaggedObjectEntityResponseSchema
 * @version v1
 */
export class TaggedObjectEntityResponseSchema {
  /**
   * Constructs a new <code>TaggedObjectEntityResponseSchema</code>.
   * @alias module:model/TaggedObjectEntityResponseSchema
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaggedObjectEntityResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaggedObjectEntityResponseSchema} obj Optional instance to populate.
   * @return {module:model/TaggedObjectEntityResponseSchema} The populated <code>TaggedObjectEntityResponseSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaggedObjectEntityResponseSchema();
      if (data.hasOwnProperty('changed_on'))
        obj.changedOn = ApiClient.convertToType(data['changed_on'], 'Date');
      if (data.hasOwnProperty('created_by'))
        obj.createdBy = User.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} changedOn
 */
TaggedObjectEntityResponseSchema.prototype.changedOn = undefined;

/**
 * @member {module:model/User} createdBy
 */
TaggedObjectEntityResponseSchema.prototype.createdBy = undefined;

/**
 * @member {String} creator
 */
TaggedObjectEntityResponseSchema.prototype.creator = undefined;

/**
 * @member {Number} id
 */
TaggedObjectEntityResponseSchema.prototype.id = undefined;

/**
 * @member {String} name
 */
TaggedObjectEntityResponseSchema.prototype.name = undefined;

/**
 * @member {String} type
 */
TaggedObjectEntityResponseSchema.prototype.type = undefined;

/**
 * @member {String} url
 */
TaggedObjectEntityResponseSchema.prototype.url = undefined;

