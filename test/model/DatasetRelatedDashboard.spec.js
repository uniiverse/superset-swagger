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
    describe('DatasetRelatedDashboard', function() {
      beforeEach(function() {
        instance = new Superset.DatasetRelatedDashboard();
      });

      it('should create an instance of DatasetRelatedDashboard', function() {
        // TODO: update the code to test DatasetRelatedDashboard
        expect(instance).to.be.a(Superset.DatasetRelatedDashboard);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property jsonMetadata (base name: "json_metadata")', function() {
        // TODO: update the code to test the property jsonMetadata
        expect(instance).to.have.property('jsonMetadata');
        // expect(instance.jsonMetadata).to.be(expectedValueLiteral);
      });

      it('should have the property slug (base name: "slug")', function() {
        // TODO: update the code to test the property slug
        expect(instance).to.have.property('slug');
        // expect(instance.slug).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

    });
  });

}));
