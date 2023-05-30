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

  beforeEach(function() {
    instance = new Superset.ExplorePermanentLinkApi();
  });

  describe('(package)', function() {
    describe('ExplorePermanentLinkApi', function() {
      describe('apiV1ExplorePermalinkKeyGet', function() {
        it('should call apiV1ExplorePermalinkKeyGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1ExplorePermalinkKeyGet call and complete the assertions
          /*

          instance.apiV1ExplorePermalinkKeyGet(key, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20018);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1ExplorePermalinkPost', function() {
        it('should call apiV1ExplorePermalinkPost successfully', function(done) {
          // TODO: uncomment apiV1ExplorePermalinkPost call and complete the assertions
          /*

          instance.apiV1ExplorePermalinkPost(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse2017);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));