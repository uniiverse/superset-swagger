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
    describe('ChartDataPivotOptionsSchema', function() {
      beforeEach(function() {
        instance = new Superset.ChartDataPivotOptionsSchema();
      });

      it('should create an instance of ChartDataPivotOptionsSchema', function() {
        // TODO: update the code to test ChartDataPivotOptionsSchema
        expect(instance).to.be.a(Superset.ChartDataPivotOptionsSchema);
      });

      it('should have the property aggregates (base name: "aggregates")', function() {
        // TODO: update the code to test the property aggregates
        expect(instance).to.have.property('aggregates');
        // expect(instance.aggregates).to.be(expectedValueLiteral);
      });

      it('should have the property columnFillValue (base name: "column_fill_value")', function() {
        // TODO: update the code to test the property columnFillValue
        expect(instance).to.have.property('columnFillValue');
        // expect(instance.columnFillValue).to.be(expectedValueLiteral);
      });

      it('should have the property columns (base name: "columns")', function() {
        // TODO: update the code to test the property columns
        expect(instance).to.have.property('columns');
        // expect(instance.columns).to.be(expectedValueLiteral);
      });

      it('should have the property dropMissingColumns (base name: "drop_missing_columns")', function() {
        // TODO: update the code to test the property dropMissingColumns
        expect(instance).to.have.property('dropMissingColumns');
        // expect(instance.dropMissingColumns).to.be(expectedValueLiteral);
      });

      it('should have the property marginalDistributionName (base name: "marginal_distribution_name")', function() {
        // TODO: update the code to test the property marginalDistributionName
        expect(instance).to.have.property('marginalDistributionName');
        // expect(instance.marginalDistributionName).to.be(expectedValueLiteral);
      });

      it('should have the property marginalDistributions (base name: "marginal_distributions")', function() {
        // TODO: update the code to test the property marginalDistributions
        expect(instance).to.have.property('marginalDistributions');
        // expect(instance.marginalDistributions).to.be(expectedValueLiteral);
      });

      it('should have the property metricFillValue (base name: "metric_fill_value")', function() {
        // TODO: update the code to test the property metricFillValue
        expect(instance).to.have.property('metricFillValue');
        // expect(instance.metricFillValue).to.be(expectedValueLiteral);
      });

    });
  });

}));
