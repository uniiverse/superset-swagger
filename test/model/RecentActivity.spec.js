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
    describe('RecentActivity', function() {
      beforeEach(function() {
        instance = new Superset.RecentActivity();
      });

      it('should create an instance of RecentActivity', function() {
        // TODO: update the code to test RecentActivity
        expect(instance).to.be.a(Superset.RecentActivity);
      });

      it('should have the property action (base name: "action")', function() {
        // TODO: update the code to test the property action
        expect(instance).to.have.property('action');
        // expect(instance.action).to.be(expectedValueLiteral);
      });

      it('should have the property itemTitle (base name: "item_title")', function() {
        // TODO: update the code to test the property itemTitle
        expect(instance).to.have.property('itemTitle');
        // expect(instance.itemTitle).to.be(expectedValueLiteral);
      });

      it('should have the property itemType (base name: "item_type")', function() {
        // TODO: update the code to test the property itemType
        expect(instance).to.have.property('itemType');
        // expect(instance.itemType).to.be(expectedValueLiteral);
      });

      it('should have the property itemUrl (base name: "item_url")', function() {
        // TODO: update the code to test the property itemUrl
        expect(instance).to.have.property('itemUrl');
        // expect(instance.itemUrl).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property timeDeltaHumanized (base name: "time_delta_humanized")', function() {
        // TODO: update the code to test the property timeDeltaHumanized
        expect(instance).to.have.property('timeDeltaHumanized');
        // expect(instance.timeDeltaHumanized).to.be(expectedValueLiteral);
      });

    });
  });

}));
