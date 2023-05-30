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
 * The DatasetColumnsRestApiGetList model module.
 * @module model/DatasetColumnsRestApiGetList
 * @version v1
 */
export class DatasetColumnsRestApiGetList {
  /**
   * Constructs a new <code>DatasetColumnsRestApiGetList</code>.
   * @alias module:model/DatasetColumnsRestApiGetList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DatasetColumnsRestApiGetList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatasetColumnsRestApiGetList} obj Optional instance to populate.
   * @return {module:model/DatasetColumnsRestApiGetList} The populated <code>DatasetColumnsRestApiGetList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatasetColumnsRestApiGetList();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
DatasetColumnsRestApiGetList.prototype.id = undefined;

