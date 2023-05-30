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
    describe('InlineResponse2002FiltersColumnName', function() {
      beforeEach(function() {
        instance = new Superset.InlineResponse2002FiltersColumnName();
      });

      it('should create an instance of InlineResponse2002FiltersColumnName', function() {
        // TODO: update the code to test InlineResponse2002FiltersColumnName
        expect(instance).to.be.a(Superset.InlineResponse2002FiltersColumnName);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property operator (base name: "operator")', function() {
        // TODO: update the code to test the property operator
        expect(instance).to.have.property('operator');
        // expect(instance.operator).to.be(expectedValueLiteral);
      });

    });
  });

}));