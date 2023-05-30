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
    describe('DatasetRestApiGetTableColumn', function() {
      beforeEach(function() {
        instance = new Superset.DatasetRestApiGetTableColumn();
      });

      it('should create an instance of DatasetRestApiGetTableColumn', function() {
        // TODO: update the code to test DatasetRestApiGetTableColumn
        expect(instance).to.be.a(Superset.DatasetRestApiGetTableColumn);
      });

      it('should have the property advancedDataType (base name: "advanced_data_type")', function() {
        // TODO: update the code to test the property advancedDataType
        expect(instance).to.have.property('advancedDataType');
        // expect(instance.advancedDataType).to.be(expectedValueLiteral);
      });

      it('should have the property changedOn (base name: "changed_on")', function() {
        // TODO: update the code to test the property changedOn
        expect(instance).to.have.property('changedOn');
        // expect(instance.changedOn).to.be(expectedValueLiteral);
      });

      it('should have the property columnName (base name: "column_name")', function() {
        // TODO: update the code to test the property columnName
        expect(instance).to.have.property('columnName');
        // expect(instance.columnName).to.be(expectedValueLiteral);
      });

      it('should have the property createdOn (base name: "created_on")', function() {
        // TODO: update the code to test the property createdOn
        expect(instance).to.have.property('createdOn');
        // expect(instance.createdOn).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property expression (base name: "expression")', function() {
        // TODO: update the code to test the property expression
        expect(instance).to.have.property('expression');
        // expect(instance.expression).to.be(expectedValueLiteral);
      });

      it('should have the property extra (base name: "extra")', function() {
        // TODO: update the code to test the property extra
        expect(instance).to.have.property('extra');
        // expect(instance.extra).to.be(expectedValueLiteral);
      });

      it('should have the property filterable (base name: "filterable")', function() {
        // TODO: update the code to test the property filterable
        expect(instance).to.have.property('filterable');
        // expect(instance.filterable).to.be(expectedValueLiteral);
      });

      it('should have the property groupby (base name: "groupby")', function() {
        // TODO: update the code to test the property groupby
        expect(instance).to.have.property('groupby');
        // expect(instance.groupby).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "is_active")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property isDttm (base name: "is_dttm")', function() {
        // TODO: update the code to test the property isDttm
        expect(instance).to.have.property('isDttm');
        // expect(instance.isDttm).to.be(expectedValueLiteral);
      });

      it('should have the property pythonDateFormat (base name: "python_date_format")', function() {
        // TODO: update the code to test the property pythonDateFormat
        expect(instance).to.have.property('pythonDateFormat');
        // expect(instance.pythonDateFormat).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property typeGeneric (base name: "type_generic")', function() {
        // TODO: update the code to test the property typeGeneric
        expect(instance).to.have.property('typeGeneric');
        // expect(instance.typeGeneric).to.be(expectedValueLiteral);
      });

      it('should have the property uuid (base name: "uuid")', function() {
        // TODO: update the code to test the property uuid
        expect(instance).to.have.property('uuid');
        // expect(instance.uuid).to.be(expectedValueLiteral);
      });

      it('should have the property verboseName (base name: "verbose_name")', function() {
        // TODO: update the code to test the property verboseName
        expect(instance).to.have.property('verboseName');
        // expect(instance.verboseName).to.be(expectedValueLiteral);
      });

    });
  });

}));
