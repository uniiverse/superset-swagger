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
    describe('TagRestApiGet', function() {
      beforeEach(function() {
        instance = new Superset.TagRestApiGet();
      });

      it('should create an instance of TagRestApiGet', function() {
        // TODO: update the code to test TagRestApiGet
        expect(instance).to.be.a(Superset.TagRestApiGet);
      });

      it('should have the property changedBy (base name: "changed_by")', function() {
        // TODO: update the code to test the property changedBy
        expect(instance).to.have.property('changedBy');
        // expect(instance.changedBy).to.be(expectedValueLiteral);
      });

      it('should have the property changedOnDeltaHumanized (base name: "changed_on_delta_humanized")', function() {
        // TODO: update the code to test the property changedOnDeltaHumanized
        expect(instance).to.have.property('changedOnDeltaHumanized');
        // expect(instance.changedOnDeltaHumanized).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "created_by")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
