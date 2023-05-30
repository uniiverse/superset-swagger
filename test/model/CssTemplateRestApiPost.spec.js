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
    describe('CssTemplateRestApiPost', function() {
      beforeEach(function() {
        instance = new Superset.CssTemplateRestApiPost();
      });

      it('should create an instance of CssTemplateRestApiPost', function() {
        // TODO: update the code to test CssTemplateRestApiPost
        expect(instance).to.be.a(Superset.CssTemplateRestApiPost);
      });

      it('should have the property css (base name: "css")', function() {
        // TODO: update the code to test the property css
        expect(instance).to.have.property('css');
        // expect(instance.css).to.be(expectedValueLiteral);
      });

      it('should have the property templateName (base name: "template_name")', function() {
        // TODO: update the code to test the property templateName
        expect(instance).to.have.property('templateName');
        // expect(instance.templateName).to.be(expectedValueLiteral);
      });

    });
  });

}));