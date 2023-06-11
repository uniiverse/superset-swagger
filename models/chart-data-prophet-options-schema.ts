/* tslint:disable */
/* eslint-disable */
/**
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface ChartDataProphetOptionsSchema
 */
export interface ChartDataProphetOptionsSchema {
    /**
     * Width of predicted confidence interval
     * @type {number}
     * @memberof ChartDataProphetOptionsSchema
     */
    confidenceInterval: number;
    /**
     * Should monthly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.
     * @type {any}
     * @memberof ChartDataProphetOptionsSchema
     */
    monthlySeasonality?: any;
    /**
     * Time periods (in units of `time_grain`) to predict into the future
     * @type {number}
     * @memberof ChartDataProphetOptionsSchema
     */
    periods: number;
    /**
     * Time grain used to specify time period increments in prediction. Supports [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) durations.
     * @type {string}
     * @memberof ChartDataProphetOptionsSchema
     */
    timeGrain: ChartDataProphetOptionsSchemaTimeGrainEnum;
    /**
     * Should weekly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.
     * @type {any}
     * @memberof ChartDataProphetOptionsSchema
     */
    weeklySeasonality?: any;
    /**
     * Should yearly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.
     * @type {any}
     * @memberof ChartDataProphetOptionsSchema
     */
    yearlySeasonality?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum ChartDataProphetOptionsSchemaTimeGrainEnum {
    PT1S = 'PT1S',
    PT5S = 'PT5S',
    PT30S = 'PT30S',
    PT1M = 'PT1M',
    PT5M = 'PT5M',
    PT10M = 'PT10M',
    PT15M = 'PT15M',
    PT30M = 'PT30M',
    PT1H = 'PT1H',
    PT6H = 'PT6H',
    P1D = 'P1D',
    P1W = 'P1W',
    P1M = 'P1M',
    P3M = 'P3M',
    P1Y = 'P1Y',
    _19691228T000000ZP1W = '1969-12-28T00:00:00Z/P1W',
    _19691229T000000ZP1W = '1969-12-29T00:00:00Z/P1W',
    P1W19700103T000000Z = 'P1W/1970-01-03T00:00:00Z',
    P1W19700104T000000Z = 'P1W/1970-01-04T00:00:00Z'
}
