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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Superset);
  }
}(this, function(expect, Superset) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ChartDataProphetOptionsSchema', function() {
      beforeEach(function() {
        instance = new Superset.ChartDataProphetOptionsSchema();
      });

      it('should create an instance of ChartDataProphetOptionsSchema', function() {
        // TODO: update the code to test ChartDataProphetOptionsSchema
        expect(instance).to.be.a(Superset.ChartDataProphetOptionsSchema);
      });

      it('should have the property confidenceInterval (base name: "confidence_interval")', function() {
        // TODO: update the code to test the property confidenceInterval
        expect(instance).to.have.property('confidenceInterval');
        // expect(instance.confidenceInterval).to.be(expectedValueLiteral);
      });

      it('should have the property monthlySeasonality (base name: "monthly_seasonality")', function() {
        // TODO: update the code to test the property monthlySeasonality
        expect(instance).to.have.property('monthlySeasonality');
        // expect(instance.monthlySeasonality).to.be(expectedValueLiteral);
      });

      it('should have the property periods (base name: "periods")', function() {
        // TODO: update the code to test the property periods
        expect(instance).to.have.property('periods');
        // expect(instance.periods).to.be(expectedValueLiteral);
      });

      it('should have the property timeGrain (base name: "time_grain")', function() {
        // TODO: update the code to test the property timeGrain
        expect(instance).to.have.property('timeGrain');
        // expect(instance.timeGrain).to.be(expectedValueLiteral);
      });

      it('should have the property weeklySeasonality (base name: "weekly_seasonality")', function() {
        // TODO: update the code to test the property weeklySeasonality
        expect(instance).to.have.property('weeklySeasonality');
        // expect(instance.weeklySeasonality).to.be(expectedValueLiteral);
      });

      it('should have the property yearlySeasonality (base name: "yearly_seasonality")', function() {
        // TODO: update the code to test the property yearlySeasonality
        expect(instance).to.have.property('yearlySeasonality');
        // expect(instance.yearlySeasonality).to.be(expectedValueLiteral);
      });

    });
  });

}));
