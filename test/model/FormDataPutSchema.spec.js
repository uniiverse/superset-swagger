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
    describe('FormDataPutSchema', function() {
      beforeEach(function() {
        instance = new Superset.FormDataPutSchema();
      });

      it('should create an instance of FormDataPutSchema', function() {
        // TODO: update the code to test FormDataPutSchema
        expect(instance).to.be.a(Superset.FormDataPutSchema);
      });

      it('should have the property chartId (base name: "chart_id")', function() {
        // TODO: update the code to test the property chartId
        expect(instance).to.have.property('chartId');
        // expect(instance.chartId).to.be(expectedValueLiteral);
      });

      it('should have the property datasourceId (base name: "datasource_id")', function() {
        // TODO: update the code to test the property datasourceId
        expect(instance).to.have.property('datasourceId');
        // expect(instance.datasourceId).to.be(expectedValueLiteral);
      });

      it('should have the property datasourceType (base name: "datasource_type")', function() {
        // TODO: update the code to test the property datasourceType
        expect(instance).to.have.property('datasourceType');
        // expect(instance.datasourceType).to.be(expectedValueLiteral);
      });

      it('should have the property formData (base name: "form_data")', function() {
        // TODO: update the code to test the property formData
        expect(instance).to.have.property('formData');
        // expect(instance.formData).to.be(expectedValueLiteral);
      });

    });
  });

}));