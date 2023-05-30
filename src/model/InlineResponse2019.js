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
import {DatasetRestApiPost} from './DatasetRestApiPost';

/**
 * The InlineResponse2019 model module.
 * @module model/InlineResponse2019
 * @version v1
 */
export class InlineResponse2019 {
  /**
   * Constructs a new <code>InlineResponse2019</code>.
   * @alias module:model/InlineResponse2019
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2019</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2019} obj Optional instance to populate.
   * @return {module:model/InlineResponse2019} The populated <code>InlineResponse2019</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2019();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = DatasetRestApiPost.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
InlineResponse2019.prototype.id = undefined;

/**
 * @member {module:model/DatasetRestApiPost} result
 */
InlineResponse2019.prototype.result = undefined;

