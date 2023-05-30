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
 * The ChartDataSortOptionsSchema model module.
 * @module model/ChartDataSortOptionsSchema
 * @version v1
 */
export class ChartDataSortOptionsSchema {
  /**
   * Constructs a new <code>ChartDataSortOptionsSchema</code>.
   * @alias module:model/ChartDataSortOptionsSchema
   * @class
   * @param columns {Object} columns by by which to sort. The key specifies the column name, value specifies if sorting in ascending order.
   */
  constructor(columns) {
    this.columns = columns;
  }

  /**
   * Constructs a <code>ChartDataSortOptionsSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChartDataSortOptionsSchema} obj Optional instance to populate.
   * @return {module:model/ChartDataSortOptionsSchema} The populated <code>ChartDataSortOptionsSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChartDataSortOptionsSchema();
      if (data.hasOwnProperty('aggregates'))
        obj.aggregates = ApiClient.convertToType(data['aggregates'], Object);
      if (data.hasOwnProperty('columns'))
        obj.columns = ApiClient.convertToType(data['columns'], Object);
    }
    return obj;
  }
}

/**
 * The keys are the name of the aggregate column to be created, and the values specify the details of how to apply the aggregation. If an operator requires additional options, these can be passed here to be unpacked in the operator call. The following numpy operators are supported: average, argmin, argmax, cumsum, cumprod, max, mean, median, nansum, nanmin, nanmax, nanmean, nanmedian, min, percentile, prod, product, std, sum, var. Any options required by the operator can be passed to the `options` object.  In the example, a new column `first_quantile` is created based on values in the column `my_col` using the `percentile` operator with the `q=0.25` parameter.
 * @member {Object} aggregates
 */
ChartDataSortOptionsSchema.prototype.aggregates = undefined;

/**
 * columns by by which to sort. The key specifies the column name, value specifies if sorting in ascending order.
 * @member {Object} columns
 */
ChartDataSortOptionsSchema.prototype.columns = undefined;

