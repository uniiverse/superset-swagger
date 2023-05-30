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
    describe('DatasetRestApiPut', function() {
      beforeEach(function() {
        instance = new Superset.DatasetRestApiPut();
      });

      it('should create an instance of DatasetRestApiPut', function() {
        // TODO: update the code to test DatasetRestApiPut
        expect(instance).to.be.a(Superset.DatasetRestApiPut);
      });

      it('should have the property cacheTimeout (base name: "cache_timeout")', function() {
        // TODO: update the code to test the property cacheTimeout
        expect(instance).to.have.property('cacheTimeout');
        // expect(instance.cacheTimeout).to.be(expectedValueLiteral);
      });

      it('should have the property columns (base name: "columns")', function() {
        // TODO: update the code to test the property columns
        expect(instance).to.have.property('columns');
        // expect(instance.columns).to.be(expectedValueLiteral);
      });

      it('should have the property databaseId (base name: "database_id")', function() {
        // TODO: update the code to test the property databaseId
        expect(instance).to.have.property('databaseId');
        // expect(instance.databaseId).to.be(expectedValueLiteral);
      });

      it('should have the property defaultEndpoint (base name: "default_endpoint")', function() {
        // TODO: update the code to test the property defaultEndpoint
        expect(instance).to.have.property('defaultEndpoint');
        // expect(instance.defaultEndpoint).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property externalUrl (base name: "external_url")', function() {
        // TODO: update the code to test the property externalUrl
        expect(instance).to.have.property('externalUrl');
        // expect(instance.externalUrl).to.be(expectedValueLiteral);
      });

      it('should have the property extra (base name: "extra")', function() {
        // TODO: update the code to test the property extra
        expect(instance).to.have.property('extra');
        // expect(instance.extra).to.be(expectedValueLiteral);
      });

      it('should have the property fetchValuesPredicate (base name: "fetch_values_predicate")', function() {
        // TODO: update the code to test the property fetchValuesPredicate
        expect(instance).to.have.property('fetchValuesPredicate');
        // expect(instance.fetchValuesPredicate).to.be(expectedValueLiteral);
      });

      it('should have the property filterSelectEnabled (base name: "filter_select_enabled")', function() {
        // TODO: update the code to test the property filterSelectEnabled
        expect(instance).to.have.property('filterSelectEnabled');
        // expect(instance.filterSelectEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property isManagedExternally (base name: "is_managed_externally")', function() {
        // TODO: update the code to test the property isManagedExternally
        expect(instance).to.have.property('isManagedExternally');
        // expect(instance.isManagedExternally).to.be(expectedValueLiteral);
      });

      it('should have the property isSqllabView (base name: "is_sqllab_view")', function() {
        // TODO: update the code to test the property isSqllabView
        expect(instance).to.have.property('isSqllabView');
        // expect(instance.isSqllabView).to.be(expectedValueLiteral);
      });

      it('should have the property mainDttmCol (base name: "main_dttm_col")', function() {
        // TODO: update the code to test the property mainDttmCol
        expect(instance).to.have.property('mainDttmCol');
        // expect(instance.mainDttmCol).to.be(expectedValueLiteral);
      });

      it('should have the property metrics (base name: "metrics")', function() {
        // TODO: update the code to test the property metrics
        expect(instance).to.have.property('metrics');
        // expect(instance.metrics).to.be(expectedValueLiteral);
      });

      it('should have the property offset (base name: "offset")', function() {
        // TODO: update the code to test the property offset
        expect(instance).to.have.property('offset');
        // expect(instance.offset).to.be(expectedValueLiteral);
      });

      it('should have the property owners (base name: "owners")', function() {
        // TODO: update the code to test the property owners
        expect(instance).to.have.property('owners');
        // expect(instance.owners).to.be(expectedValueLiteral);
      });

      it('should have the property schema (base name: "schema")', function() {
        // TODO: update the code to test the property schema
        expect(instance).to.have.property('schema');
        // expect(instance.schema).to.be(expectedValueLiteral);
      });

      it('should have the property sql (base name: "sql")', function() {
        // TODO: update the code to test the property sql
        expect(instance).to.have.property('sql');
        // expect(instance.sql).to.be(expectedValueLiteral);
      });

      it('should have the property tableName (base name: "table_name")', function() {
        // TODO: update the code to test the property tableName
        expect(instance).to.have.property('tableName');
        // expect(instance.tableName).to.be(expectedValueLiteral);
      });

      it('should have the property templateParams (base name: "template_params")', function() {
        // TODO: update the code to test the property templateParams
        expect(instance).to.have.property('templateParams');
        // expect(instance.templateParams).to.be(expectedValueLiteral);
      });

    });
  });

}));
