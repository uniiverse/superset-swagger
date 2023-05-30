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
 * The ChartDataResponseResult model module.
 * @module model/ChartDataResponseResult
 * @version v1
 */
export class ChartDataResponseResult {
  /**
   * Constructs a new <code>ChartDataResponseResult</code>.
   * @alias module:model/ChartDataResponseResult
   * @class
   * @param cacheKey {String} Unique cache key for query object
   * @param cacheTimeout {Number} Cache timeout in following order: custom timeout, datasource timeout, cache default timeout, config default cache timeout.
   * @param cachedDttm {String} Cache timestamp
   * @param isCached {Boolean} Is the result cached
   * @param query {String} The executed query statement
   */
  constructor(cacheKey, cacheTimeout, cachedDttm, isCached, query) {
    this.cacheKey = cacheKey;
    this.cacheTimeout = cacheTimeout;
    this.cachedDttm = cachedDttm;
    this.isCached = isCached;
    this.query = query;
  }

  /**
   * Constructs a <code>ChartDataResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChartDataResponseResult} obj Optional instance to populate.
   * @return {module:model/ChartDataResponseResult} The populated <code>ChartDataResponseResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChartDataResponseResult();
      if (data.hasOwnProperty('annotation_data'))
        obj.annotationData = ApiClient.convertToType(data['annotation_data'], [{'String': 'String'}]);
      if (data.hasOwnProperty('applied_filters'))
        obj.appliedFilters = ApiClient.convertToType(data['applied_filters'], [Object]);
      if (data.hasOwnProperty('cache_key'))
        obj.cacheKey = ApiClient.convertToType(data['cache_key'], 'String');
      if (data.hasOwnProperty('cache_timeout'))
        obj.cacheTimeout = ApiClient.convertToType(data['cache_timeout'], 'Number');
      if (data.hasOwnProperty('cached_dttm'))
        obj.cachedDttm = ApiClient.convertToType(data['cached_dttm'], 'String');
      if (data.hasOwnProperty('colnames'))
        obj.colnames = ApiClient.convertToType(data['colnames'], ['String']);
      if (data.hasOwnProperty('coltypes'))
        obj.coltypes = ApiClient.convertToType(data['coltypes'], ['Number']);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [Object]);
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'String');
      if (data.hasOwnProperty('from_dttm'))
        obj.fromDttm = ApiClient.convertToType(data['from_dttm'], 'Number');
      if (data.hasOwnProperty('is_cached'))
        obj.isCached = ApiClient.convertToType(data['is_cached'], 'Boolean');
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], 'String');
      if (data.hasOwnProperty('rejected_filters'))
        obj.rejectedFilters = ApiClient.convertToType(data['rejected_filters'], [Object]);
      if (data.hasOwnProperty('rowcount'))
        obj.rowcount = ApiClient.convertToType(data['rowcount'], 'Number');
      if (data.hasOwnProperty('stacktrace'))
        obj.stacktrace = ApiClient.convertToType(data['stacktrace'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('to_dttm'))
        obj.toDttm = ApiClient.convertToType(data['to_dttm'], 'Number');
    }
    return obj;
  }
}

/**
 * All requested annotation data
 * @member {Array.<Object.<String, String>>} annotationData
 */
ChartDataResponseResult.prototype.annotationData = undefined;

/**
 * A list with applied filters
 * @member {Array.<Object>} appliedFilters
 */
ChartDataResponseResult.prototype.appliedFilters = undefined;

/**
 * Unique cache key for query object
 * @member {String} cacheKey
 */
ChartDataResponseResult.prototype.cacheKey = undefined;

/**
 * Cache timeout in following order: custom timeout, datasource timeout, cache default timeout, config default cache timeout.
 * @member {Number} cacheTimeout
 */
ChartDataResponseResult.prototype.cacheTimeout = undefined;

/**
 * Cache timestamp
 * @member {String} cachedDttm
 */
ChartDataResponseResult.prototype.cachedDttm = undefined;

/**
 * A list of column names
 * @member {Array.<String>} colnames
 */
ChartDataResponseResult.prototype.colnames = undefined;

/**
 * A list of generic data types of each column
 * @member {Array.<Number>} coltypes
 */
ChartDataResponseResult.prototype.coltypes = undefined;

/**
 * A list with results
 * @member {Array.<Object>} data
 */
ChartDataResponseResult.prototype.data = undefined;

/**
 * Error
 * @member {String} error
 */
ChartDataResponseResult.prototype.error = undefined;

/**
 * Start timestamp of time range
 * @member {Number} fromDttm
 */
ChartDataResponseResult.prototype.fromDttm = undefined;

/**
 * Is the result cached
 * @member {Boolean} isCached
 */
ChartDataResponseResult.prototype.isCached = undefined;

/**
 * The executed query statement
 * @member {String} query
 */
ChartDataResponseResult.prototype.query = undefined;

/**
 * A list with rejected filters
 * @member {Array.<Object>} rejectedFilters
 */
ChartDataResponseResult.prototype.rejectedFilters = undefined;

/**
 * Amount of rows in result set
 * @member {Number} rowcount
 */
ChartDataResponseResult.prototype.rowcount = undefined;

/**
 * Stacktrace if there was an error
 * @member {String} stacktrace
 */
ChartDataResponseResult.prototype.stacktrace = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ChartDataResponseResult.StatusEnum = {
  /**
   * value: "stopped"
   * @const
   */
  stopped: "stopped",

  /**
   * value: "failed"
   * @const
   */
  failed: "failed",

  /**
   * value: "pending"
   * @const
   */
  pending: "pending",

  /**
   * value: "running"
   * @const
   */
  running: "running",

  /**
   * value: "scheduled"
   * @const
   */
  scheduled: "scheduled",

  /**
   * value: "success"
   * @const
   */
  success: "success",

  /**
   * value: "timed_out"
   * @const
   */
  timedOut: "timed_out"
};
/**
 * Status of the query
 * @member {module:model/ChartDataResponseResult.StatusEnum} status
 */
ChartDataResponseResult.prototype.status = undefined;

/**
 * End timestamp of time range
 * @member {Number} toDttm
 */
ChartDataResponseResult.prototype.toDttm = undefined;

