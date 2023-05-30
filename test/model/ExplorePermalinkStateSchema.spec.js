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
    describe('ExplorePermalinkStateSchema', function() {
      beforeEach(function() {
        instance = new Superset.ExplorePermalinkStateSchema();
      });

      it('should create an instance of ExplorePermalinkStateSchema', function() {
        // TODO: update the code to test ExplorePermalinkStateSchema
        expect(instance).to.be.a(Superset.ExplorePermalinkStateSchema);
      });

      it('should have the property formData (base name: "formData")', function() {
        // TODO: update the code to test the property formData
        expect(instance).to.have.property('formData');
        // expect(instance.formData).to.be(expectedValueLiteral);
      });

      it('should have the property urlParams (base name: "urlParams")', function() {
        // TODO: update the code to test the property urlParams
        expect(instance).to.have.property('urlParams');
        // expect(instance.urlParams).to.be(expectedValueLiteral);
      });

    });
  });

}));
