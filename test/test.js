'use strict';
var assert = require('assert')
  , should = require('should')
  , units = require('../lib/units.js');

describe('units', function () {
  describe('getUnitDescription()', function () {
    it('should translate a uuid into a human-readable unit', function (done) {
      var uuid = 'urn:uuid:c2a18c35-f4e7-4297-b8de-1e0f1bd16cfb';
      units.getUnitDescription(uuid).should.eql('Teaspoon');
      done();
    });
    it('should translate a group of uuids into a group of human-readable units', function (done) {
      var uuids = [
        'urn:uuid:c2a18c35-f4e7-4297-b8de-1e0f1bd16cfb'
      , 'urn:uuid:1c8d43b3-6b19-43ab-95f0-803a37fdf4f1'
      , 'urn:uuid:dfad1d25-17ff-4201-bba0-0711e8b88c65'
      ];
      units.getUnitDescription(uuids).should.eql(['Teaspoon', 'Tablespoon', 'Cup']);
      done();
    }); 
  });
});

describe('esha', function () {
  describe.skip('search()', function () {});
  describe.skip('analyze()', function () {});
});