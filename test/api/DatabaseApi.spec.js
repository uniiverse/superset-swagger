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
    instance = new Superset.DatabaseApi();
  });

  describe('(package)', function() {
    describe('DatabaseApi', function() {
      describe('apiV1DatabaseAvailableGet', function() {
        it('should call apiV1DatabaseAvailableGet successfully', function(done) {
          // TODO: uncomment apiV1DatabaseAvailableGet call and complete the assertions
          /*

          instance.apiV1DatabaseAvailableGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Superset.InlineResponse20030);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabaseExportGet', function() {
        it('should call apiV1DatabaseExportGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabaseExportGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1DatabaseExportGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Blob);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabaseGet', function() {
        it('should call apiV1DatabaseGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabaseGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1DatabaseGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20029);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabaseImportPost', function() {
        it('should call apiV1DatabaseImportPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabaseImportPost call and complete the assertions
          /*

          instance.apiV1DatabaseImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse400);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabaseInfoGet', function() {
        it('should call apiV1DatabaseInfoGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabaseInfoGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1DatabaseInfoGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkConnectionGet', function() {
        it('should call apiV1DatabasePkConnectionGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkConnectionGet call and complete the assertions
          /*

          instance.apiV1DatabasePkConnectionGet(pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.DatabaseConnectionSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkDelete', function() {
        it('should call apiV1DatabasePkDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkDelete call and complete the assertions
          /*

          instance.apiV1DatabasePkDelete(pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse400);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkFunctionNamesGet', function() {
        it('should call apiV1DatabasePkFunctionNamesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkFunctionNamesGet call and complete the assertions
          /*

          instance.apiV1DatabasePkFunctionNamesGet(pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.DatabaseFunctionNamesResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkGet', function() {
        it('should call apiV1DatabasePkGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkGet call and complete the assertions
          /*

          instance.apiV1DatabasePkGet(pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkPut', function() {
        it('should call apiV1DatabasePkPut successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkPut call and complete the assertions
          /*

          instance.apiV1DatabasePkPut(body, pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20031);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkRelatedObjectsGet', function() {
        it('should call apiV1DatabasePkRelatedObjectsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkRelatedObjectsGet call and complete the assertions
          /*

          instance.apiV1DatabasePkRelatedObjectsGet(pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.DatabaseRelatedObjectsResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkSchemasAccessForFileUploadGet', function() {
        it('should call apiV1DatabasePkSchemasAccessForFileUploadGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkSchemasAccessForFileUploadGet call and complete the assertions
          /*

          instance.apiV1DatabasePkSchemasAccessForFileUploadGet(pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.DatabaseSchemaAccessForFileUploadResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkSchemasGet', function() {
        it('should call apiV1DatabasePkSchemasGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkSchemasGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1DatabasePkSchemasGet(pk, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.SchemasResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkSelectStarTableNameGet', function() {
        it('should call apiV1DatabasePkSelectStarTableNameGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkSelectStarTableNameGet call and complete the assertions
          /*

          instance.apiV1DatabasePkSelectStarTableNameGet(pk, tableName, schemaName, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.SelectStarResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkSelectStarTableNameSchemaNameGet', function() {
        it('should call apiV1DatabasePkSelectStarTableNameSchemaNameGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkSelectStarTableNameSchemaNameGet call and complete the assertions
          /*

          instance.apiV1DatabasePkSelectStarTableNameSchemaNameGet(pk, tableName, schemaName, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.SelectStarResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkSshTunnelDelete', function() {
        it('should call apiV1DatabasePkSshTunnelDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkSshTunnelDelete call and complete the assertions
          /*

          instance.apiV1DatabasePkSshTunnelDelete(pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse400);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkTableExtraTableNameSchemaNameGet', function() {
        it('should call apiV1DatabasePkTableExtraTableNameSchemaNameGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkTableExtraTableNameSchemaNameGet call and complete the assertions
          /*

          instance.apiV1DatabasePkTableExtraTableNameSchemaNameGet(pk, tableName, schemaName, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.TableExtraMetadataResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkTableTableNameSchemaNameGet', function() {
        it('should call apiV1DatabasePkTableTableNameSchemaNameGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkTableTableNameSchemaNameGet call and complete the assertions
          /*

          instance.apiV1DatabasePkTableTableNameSchemaNameGet(pk, tableName, schemaName, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.TableMetadataResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkTablesGet', function() {
        it('should call apiV1DatabasePkTablesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkTablesGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1DatabasePkTablesGet(pk, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20032);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePkValidateSqlPost', function() {
        it('should call apiV1DatabasePkValidateSqlPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePkValidateSqlPost call and complete the assertions
          /*

          instance.apiV1DatabasePkValidateSqlPost(body, pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20033);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabasePost', function() {
        it('should call apiV1DatabasePost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabasePost call and complete the assertions
          /*

          instance.apiV1DatabasePost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse2018);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabaseTestConnectionPost', function() {
        it('should call apiV1DatabaseTestConnectionPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabaseTestConnectionPost call and complete the assertions
          /*

          instance.apiV1DatabaseTestConnectionPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse400);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1DatabaseValidateParametersPost', function() {
        it('should call apiV1DatabaseValidateParametersPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1DatabaseValidateParametersPost call and complete the assertions
          /*

          instance.apiV1DatabaseValidateParametersPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse400);

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
