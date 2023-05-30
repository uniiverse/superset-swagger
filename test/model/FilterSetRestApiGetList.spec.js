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
    describe('FilterSetRestApiGetList', function() {
      beforeEach(function() {
        instance = new Superset.FilterSetRestApiGetList();
      });

      it('should create an instance of FilterSetRestApiGetList', function() {
        // TODO: update the code to test FilterSetRestApiGetList
        expect(instance).to.be.a(Superset.FilterSetRestApiGetList);
      });

      it('should have the property changedByFk (base name: "changed_by_fk")', function() {
        // TODO: update the code to test the property changedByFk
        expect(instance).to.have.property('changedByFk');
        // expect(instance.changedByFk).to.be(expectedValueLiteral);
      });

      it('should have the property changedOn (base name: "changed_on")', function() {
        // TODO: update the code to test the property changedOn
        expect(instance).to.have.property('changedOn');
        // expect(instance.changedOn).to.be(expectedValueLiteral);
      });

      it('should have the property createdByFk (base name: "created_by_fk")', function() {
        // TODO: update the code to test the property createdByFk
        expect(instance).to.have.property('createdByFk');
        // expect(instance.createdByFk).to.be(expectedValueLiteral);
      });

      it('should have the property createdOn (base name: "created_on")', function() {
        // TODO: update the code to test the property createdOn
        expect(instance).to.have.property('createdOn');
        // expect(instance.createdOn).to.be(expectedValueLiteral);
      });

      it('should have the property dashboardId (base name: "dashboard_id")', function() {
        // TODO: update the code to test the property dashboardId
        expect(instance).to.have.property('dashboardId');
        // expect(instance.dashboardId).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
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

      it('should have the property ownerId (base name: "owner_id")', function() {
        // TODO: update the code to test the property ownerId
        expect(instance).to.have.property('ownerId');
        // expect(instance.ownerId).to.be(expectedValueLiteral);
      });

      it('should have the property ownerType (base name: "owner_type")', function() {
        // TODO: update the code to test the property ownerType
        expect(instance).to.have.property('ownerType');
        // expect(instance.ownerType).to.be(expectedValueLiteral);
      });

      it('should have the property params (base name: "params")', function() {
        // TODO: update the code to test the property params
        expect(instance).to.have.property('params');
        // expect(instance.params).to.be(expectedValueLiteral);
      });

    });
  });

}));
