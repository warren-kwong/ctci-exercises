const chai = require('chai');

const should = chai.should();

const { isUnique } = require('../ch01/isUnique');

describe('ch01', function() {
  describe('isUnique', function() {
    it('should return true if the input string has all unique characters', function() {
      isUnique('abcdef').should.equal(true);
      isUnique('').should.equal(true);
      isUnique('asfaksje').should.equal(true);
    });
  });
});
