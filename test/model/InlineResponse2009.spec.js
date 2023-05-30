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
    describe('InlineResponse2009', function() {
      beforeEach(function() {
        instance = new Superset.InlineResponse2009();
      });

      it('should create an instance of InlineResponse2009', function() {
        // TODO: update the code to test InlineResponse2009
        expect(instance).to.be.a(Superset.InlineResponse2009);
      });

      it('should have the property result (base name: "result")', function() {
        // TODO: update the code to test the property result
        expect(instance).to.have.property('result');
        // expect(instance.result).to.be(expectedValueLiteral);
      });

    });
  });

}));
