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
    describe('InlineResponse20030', function() {
      beforeEach(function() {
        instance = new Superset.InlineResponse20030();
      });

      it('should create an instance of InlineResponse20030', function() {
        // TODO: update the code to test InlineResponse20030
        expect(instance).to.be.a(Superset.InlineResponse20030);
      });

      it('should have the property availableDrivers (base name: "available_drivers")', function() {
        // TODO: update the code to test the property availableDrivers
        expect(instance).to.have.property('availableDrivers');
        // expect(instance.availableDrivers).to.be(expectedValueLiteral);
      });

      it('should have the property defaultDriver (base name: "default_driver")', function() {
        // TODO: update the code to test the property defaultDriver
        expect(instance).to.have.property('defaultDriver');
        // expect(instance.defaultDriver).to.be(expectedValueLiteral);
      });

      it('should have the property engine (base name: "engine")', function() {
        // TODO: update the code to test the property engine
        expect(instance).to.have.property('engine');
        // expect(instance.engine).to.be(expectedValueLiteral);
      });

      it('should have the property engineInformation (base name: "engine_information")', function() {
        // TODO: update the code to test the property engineInformation
        expect(instance).to.have.property('engineInformation');
        // expect(instance.engineInformation).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property parameters (base name: "parameters")', function() {
        // TODO: update the code to test the property parameters
        expect(instance).to.have.property('parameters');
        // expect(instance.parameters).to.be(expectedValueLiteral);
      });

      it('should have the property preferred (base name: "preferred")', function() {
        // TODO: update the code to test the property preferred
        expect(instance).to.have.property('preferred');
        // expect(instance.preferred).to.be(expectedValueLiteral);
      });

      it('should have the property sqlalchemyUriPlaceholder (base name: "sqlalchemy_uri_placeholder")', function() {
        // TODO: update the code to test the property sqlalchemyUriPlaceholder
        expect(instance).to.have.property('sqlalchemyUriPlaceholder');
        // expect(instance.sqlalchemyUriPlaceholder).to.be(expectedValueLiteral);
      });

    });
  });

}));