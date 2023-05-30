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
 * The DatasetRestApiGetListUser1 model module.
 * @module model/DatasetRestApiGetListUser1
 * @version v1
 */
export class DatasetRestApiGetListUser1 {
  /**
   * Constructs a new <code>DatasetRestApiGetListUser1</code>.
   * @alias module:model/DatasetRestApiGetListUser1
   * @class
   * @param firstName {String} 
   * @param lastName {String} 
   */
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Constructs a <code>DatasetRestApiGetListUser1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatasetRestApiGetListUser1} obj Optional instance to populate.
   * @return {module:model/DatasetRestApiGetListUser1} The populated <code>DatasetRestApiGetListUser1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatasetRestApiGetListUser1();
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} firstName
 */
DatasetRestApiGetListUser1.prototype.firstName = undefined;

/**
 * @member {Number} id
 */
DatasetRestApiGetListUser1.prototype.id = undefined;

/**
 * @member {String} lastName
 */
DatasetRestApiGetListUser1.prototype.lastName = undefined;

