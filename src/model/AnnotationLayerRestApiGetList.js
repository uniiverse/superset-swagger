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
import {AnnotationLayerRestApiGetListUser} from './AnnotationLayerRestApiGetListUser';
import {AnnotationLayerRestApiGetListUser1} from './AnnotationLayerRestApiGetListUser1';

/**
 * The AnnotationLayerRestApiGetList model module.
 * @module model/AnnotationLayerRestApiGetList
 * @version v1
 */
export class AnnotationLayerRestApiGetList {
  /**
   * Constructs a new <code>AnnotationLayerRestApiGetList</code>.
   * @alias module:model/AnnotationLayerRestApiGetList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AnnotationLayerRestApiGetList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnnotationLayerRestApiGetList} obj Optional instance to populate.
   * @return {module:model/AnnotationLayerRestApiGetList} The populated <code>AnnotationLayerRestApiGetList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnnotationLayerRestApiGetList();
      if (data.hasOwnProperty('changed_by'))
        obj.changedBy = AnnotationLayerRestApiGetListUser.constructFromObject(data['changed_by']);
      if (data.hasOwnProperty('changed_on'))
        obj.changedOn = ApiClient.convertToType(data['changed_on'], 'Date');
      if (data.hasOwnProperty('changed_on_delta_humanized'))
        obj.changedOnDeltaHumanized = ApiClient.convertToType(data['changed_on_delta_humanized'], Object);
      if (data.hasOwnProperty('created_by'))
        obj.createdBy = AnnotationLayerRestApiGetListUser1.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('created_on'))
        obj.createdOn = ApiClient.convertToType(data['created_on'], 'Date');
      if (data.hasOwnProperty('descr'))
        obj.descr = ApiClient.convertToType(data['descr'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/AnnotationLayerRestApiGetListUser} changedBy
 */
AnnotationLayerRestApiGetList.prototype.changedBy = undefined;

/**
 * @member {Date} changedOn
 */
AnnotationLayerRestApiGetList.prototype.changedOn = undefined;

/**
 * @member {Object} changedOnDeltaHumanized
 */
AnnotationLayerRestApiGetList.prototype.changedOnDeltaHumanized = undefined;

/**
 * @member {module:model/AnnotationLayerRestApiGetListUser1} createdBy
 */
AnnotationLayerRestApiGetList.prototype.createdBy = undefined;

/**
 * @member {Date} createdOn
 */
AnnotationLayerRestApiGetList.prototype.createdOn = undefined;

/**
 * @member {String} descr
 */
AnnotationLayerRestApiGetList.prototype.descr = undefined;

/**
 * @member {Number} id
 */
AnnotationLayerRestApiGetList.prototype.id = undefined;

/**
 * @member {String} name
 */
AnnotationLayerRestApiGetList.prototype.name = undefined;

