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
    describe('ChartRestApiPost', function() {
      beforeEach(function() {
        instance = new Superset.ChartRestApiPost();
      });

      it('should create an instance of ChartRestApiPost', function() {
        // TODO: update the code to test ChartRestApiPost
        expect(instance).to.be.a(Superset.ChartRestApiPost);
      });

      it('should have the property cacheTimeout (base name: "cache_timeout")', function() {
        // TODO: update the code to test the property cacheTimeout
        expect(instance).to.have.property('cacheTimeout');
        // expect(instance.cacheTimeout).to.be(expectedValueLiteral);
      });

      it('should have the property certificationDetails (base name: "certification_details")', function() {
        // TODO: update the code to test the property certificationDetails
        expect(instance).to.have.property('certificationDetails');
        // expect(instance.certificationDetails).to.be(expectedValueLiteral);
      });

      it('should have the property certifiedBy (base name: "certified_by")', function() {
        // TODO: update the code to test the property certifiedBy
        expect(instance).to.have.property('certifiedBy');
        // expect(instance.certifiedBy).to.be(expectedValueLiteral);
      });

      it('should have the property dashboards (base name: "dashboards")', function() {
        // TODO: update the code to test the property dashboards
        expect(instance).to.have.property('dashboards');
        // expect(instance.dashboards).to.be(expectedValueLiteral);
      });

      it('should have the property datasourceId (base name: "datasource_id")', function() {
        // TODO: update the code to test the property datasourceId
        expect(instance).to.have.property('datasourceId');
        // expect(instance.datasourceId).to.be(expectedValueLiteral);
      });

      it('should have the property datasourceName (base name: "datasource_name")', function() {
        // TODO: update the code to test the property datasourceName
        expect(instance).to.have.property('datasourceName');
        // expect(instance.datasourceName).to.be(expectedValueLiteral);
      });

      it('should have the property datasourceType (base name: "datasource_type")', function() {
        // TODO: update the code to test the property datasourceType
        expect(instance).to.have.property('datasourceType');
        // expect(instance.datasourceType).to.be(expectedValueLiteral);
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

      it('should have the property isManagedExternally (base name: "is_managed_externally")', function() {
        // TODO: update the code to test the property isManagedExternally
        expect(instance).to.have.property('isManagedExternally');
        // expect(instance.isManagedExternally).to.be(expectedValueLiteral);
      });

      it('should have the property owners (base name: "owners")', function() {
        // TODO: update the code to test the property owners
        expect(instance).to.have.property('owners');
        // expect(instance.owners).to.be(expectedValueLiteral);
      });

      it('should have the property params (base name: "params")', function() {
        // TODO: update the code to test the property params
        expect(instance).to.have.property('params');
        // expect(instance.params).to.be(expectedValueLiteral);
      });

      it('should have the property queryContext (base name: "query_context")', function() {
        // TODO: update the code to test the property queryContext
        expect(instance).to.have.property('queryContext');
        // expect(instance.queryContext).to.be(expectedValueLiteral);
      });

      it('should have the property queryContextGeneration (base name: "query_context_generation")', function() {
        // TODO: update the code to test the property queryContextGeneration
        expect(instance).to.have.property('queryContextGeneration');
        // expect(instance.queryContextGeneration).to.be(expectedValueLiteral);
      });

      it('should have the property sliceName (base name: "slice_name")', function() {
        // TODO: update the code to test the property sliceName
        expect(instance).to.have.property('sliceName');
        // expect(instance.sliceName).to.be(expectedValueLiteral);
      });

      it('should have the property vizType (base name: "viz_type")', function() {
        // TODO: update the code to test the property vizType
        expect(instance).to.have.property('vizType');
        // expect(instance.vizType).to.be(expectedValueLiteral);
      });

    });
  });

}));
