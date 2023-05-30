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
    describe('GetInfoSchemaAddColumns', function() {
      beforeEach(function() {
        instance = new Superset.GetInfoSchemaAddColumns();
      });

      it('should create an instance of GetInfoSchemaAddColumns', function() {
        // TODO: update the code to test GetInfoSchemaAddColumns
        expect(instance).to.be.a(Superset.GetInfoSchemaAddColumns);
      });

      it('should have the property page (base name: "page")', function() {
        // TODO: update the code to test the property page
        expect(instance).to.have.property('page');
        // expect(instance.page).to.be(expectedValueLiteral);
      });

      it('should have the property pageSize (base name: "page_size")', function() {
        // TODO: update the code to test the property pageSize
        expect(instance).to.have.property('pageSize');
        // expect(instance.pageSize).to.be(expectedValueLiteral);
      });

    });
  });

}));
