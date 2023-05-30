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
    describe('GuestTokenCreate', function() {
      beforeEach(function() {
        instance = new Superset.GuestTokenCreate();
      });

      it('should create an instance of GuestTokenCreate', function() {
        // TODO: update the code to test GuestTokenCreate
        expect(instance).to.be.a(Superset.GuestTokenCreate);
      });

      it('should have the property resources (base name: "resources")', function() {
        // TODO: update the code to test the property resources
        expect(instance).to.have.property('resources');
        // expect(instance.resources).to.be(expectedValueLiteral);
      });

      it('should have the property rls (base name: "rls")', function() {
        // TODO: update the code to test the property rls
        expect(instance).to.have.property('rls');
        // expect(instance.rls).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

    });
  });

}));
