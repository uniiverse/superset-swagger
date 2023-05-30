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
 * The ChartFavStarResponseResult model module.
 * @module model/ChartFavStarResponseResult
 * @version v1
 */
export class ChartFavStarResponseResult {
  /**
   * Constructs a new <code>ChartFavStarResponseResult</code>.
   * @alias module:model/ChartFavStarResponseResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChartFavStarResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChartFavStarResponseResult} obj Optional instance to populate.
   * @return {module:model/ChartFavStarResponseResult} The populated <code>ChartFavStarResponseResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChartFavStarResponseResult();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The Chart id
 * @member {Number} id
 */
ChartFavStarResponseResult.prototype.id = undefined;

/**
 * The FaveStar value
 * @member {Boolean} value
 */
ChartFavStarResponseResult.prototype.value = undefined;

