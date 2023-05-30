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
    describe('DatabaseRestApiPost', function() {
      beforeEach(function() {
        instance = new Superset.DatabaseRestApiPost();
      });

      it('should create an instance of DatabaseRestApiPost', function() {
        // TODO: update the code to test DatabaseRestApiPost
        expect(instance).to.be.a(Superset.DatabaseRestApiPost);
      });

      it('should have the property allowCtas (base name: "allow_ctas")', function() {
        // TODO: update the code to test the property allowCtas
        expect(instance).to.have.property('allowCtas');
        // expect(instance.allowCtas).to.be(expectedValueLiteral);
      });

      it('should have the property allowCvas (base name: "allow_cvas")', function() {
        // TODO: update the code to test the property allowCvas
        expect(instance).to.have.property('allowCvas');
        // expect(instance.allowCvas).to.be(expectedValueLiteral);
      });

      it('should have the property allowDml (base name: "allow_dml")', function() {
        // TODO: update the code to test the property allowDml
        expect(instance).to.have.property('allowDml');
        // expect(instance.allowDml).to.be(expectedValueLiteral);
      });

      it('should have the property allowFileUpload (base name: "allow_file_upload")', function() {
        // TODO: update the code to test the property allowFileUpload
        expect(instance).to.have.property('allowFileUpload');
        // expect(instance.allowFileUpload).to.be(expectedValueLiteral);
      });

      it('should have the property allowRunAsync (base name: "allow_run_async")', function() {
        // TODO: update the code to test the property allowRunAsync
        expect(instance).to.have.property('allowRunAsync');
        // expect(instance.allowRunAsync).to.be(expectedValueLiteral);
      });

      it('should have the property cacheTimeout (base name: "cache_timeout")', function() {
        // TODO: update the code to test the property cacheTimeout
        expect(instance).to.have.property('cacheTimeout');
        // expect(instance.cacheTimeout).to.be(expectedValueLiteral);
      });

      it('should have the property configurationMethod (base name: "configuration_method")', function() {
        // TODO: update the code to test the property configurationMethod
        expect(instance).to.have.property('configurationMethod');
        // expect(instance.configurationMethod).to.be(expectedValueLiteral);
      });

      it('should have the property databaseName (base name: "database_name")', function() {
        // TODO: update the code to test the property databaseName
        expect(instance).to.have.property('databaseName');
        // expect(instance.databaseName).to.be(expectedValueLiteral);
      });

      it('should have the property driver (base name: "driver")', function() {
        // TODO: update the code to test the property driver
        expect(instance).to.have.property('driver');
        // expect(instance.driver).to.be(expectedValueLiteral);
      });

      it('should have the property engine (base name: "engine")', function() {
        // TODO: update the code to test the property engine
        expect(instance).to.have.property('engine');
        // expect(instance.engine).to.be(expectedValueLiteral);
      });

      it('should have the property exposeInSqllab (base name: "expose_in_sqllab")', function() {
        // TODO: update the code to test the property exposeInSqllab
        expect(instance).to.have.property('exposeInSqllab');
        // expect(instance.exposeInSqllab).to.be(expectedValueLiteral);
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

      it('should have the property forceCtasSchema (base name: "force_ctas_schema")', function() {
        // TODO: update the code to test the property forceCtasSchema
        expect(instance).to.have.property('forceCtasSchema');
        // expect(instance.forceCtasSchema).to.be(expectedValueLiteral);
      });

      it('should have the property impersonateUser (base name: "impersonate_user")', function() {
        // TODO: update the code to test the property impersonateUser
        expect(instance).to.have.property('impersonateUser');
        // expect(instance.impersonateUser).to.be(expectedValueLiteral);
      });

      it('should have the property isManagedExternally (base name: "is_managed_externally")', function() {
        // TODO: update the code to test the property isManagedExternally
        expect(instance).to.have.property('isManagedExternally');
        // expect(instance.isManagedExternally).to.be(expectedValueLiteral);
      });

      it('should have the property maskedEncryptedExtra (base name: "masked_encrypted_extra")', function() {
        // TODO: update the code to test the property maskedEncryptedExtra
        expect(instance).to.have.property('maskedEncryptedExtra');
        // expect(instance.maskedEncryptedExtra).to.be(expectedValueLiteral);
      });

      it('should have the property parameters (base name: "parameters")', function() {
        // TODO: update the code to test the property parameters
        expect(instance).to.have.property('parameters');
        // expect(instance.parameters).to.be(expectedValueLiteral);
      });

      it('should have the property serverCert (base name: "server_cert")', function() {
        // TODO: update the code to test the property serverCert
        expect(instance).to.have.property('serverCert');
        // expect(instance.serverCert).to.be(expectedValueLiteral);
      });

      it('should have the property sqlalchemyUri (base name: "sqlalchemy_uri")', function() {
        // TODO: update the code to test the property sqlalchemyUri
        expect(instance).to.have.property('sqlalchemyUri');
        // expect(instance.sqlalchemyUri).to.be(expectedValueLiteral);
      });

      it('should have the property sshTunnel (base name: "ssh_tunnel")', function() {
        // TODO: update the code to test the property sshTunnel
        expect(instance).to.have.property('sshTunnel');
        // expect(instance.sshTunnel).to.be(expectedValueLiteral);
      });

      it('should have the property uuid (base name: "uuid")', function() {
        // TODO: update the code to test the property uuid
        expect(instance).to.have.property('uuid');
        // expect(instance.uuid).to.be(expectedValueLiteral);
      });

    });
  });

}));
