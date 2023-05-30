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
    describe('LogRestApiGetList', function() {
      beforeEach(function() {
        instance = new Superset.LogRestApiGetList();
      });

      it('should create an instance of LogRestApiGetList', function() {
        // TODO: update the code to test LogRestApiGetList
        expect(instance).to.be.a(Superset.LogRestApiGetList);
      });

      it('should have the property action (base name: "action")', function() {
        // TODO: update the code to test the property action
        expect(instance).to.have.property('action');
        // expect(instance.action).to.be(expectedValueLiteral);
      });

      it('should have the property dashboardId (base name: "dashboard_id")', function() {
        // TODO: update the code to test the property dashboardId
        expect(instance).to.have.property('dashboardId');
        // expect(instance.dashboardId).to.be(expectedValueLiteral);
      });

      it('should have the property dttm (base name: "dttm")', function() {
        // TODO: update the code to test the property dttm
        expect(instance).to.have.property('dttm');
        // expect(instance.dttm).to.be(expectedValueLiteral);
      });

      it('should have the property durationMs (base name: "duration_ms")', function() {
        // TODO: update the code to test the property durationMs
        expect(instance).to.have.property('durationMs');
        // expect(instance.durationMs).to.be(expectedValueLiteral);
      });

      it('should have the property json (base name: "json")', function() {
        // TODO: update the code to test the property json
        expect(instance).to.have.property('json');
        // expect(instance.json).to.be(expectedValueLiteral);
      });

      it('should have the property referrer (base name: "referrer")', function() {
        // TODO: update the code to test the property referrer
        expect(instance).to.have.property('referrer');
        // expect(instance.referrer).to.be(expectedValueLiteral);
      });

      it('should have the property sliceId (base name: "slice_id")', function() {
        // TODO: update the code to test the property sliceId
        expect(instance).to.have.property('sliceId');
        // expect(instance.sliceId).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "user_id")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

    });
  });

}));
