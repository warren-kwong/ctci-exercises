const chai = require('chai');

const should = chai.should();

const { isUnique, isUniqueNo } = require('../ch01/isUnique');
const { checkPermutation } = require('../ch01/checkPermutation');

describe('ch01', function() {
  describe('isUnique', function() {
    it('should check if the input string has all unique characters', function() {
      isUnique('abcdef').should.equal(true);
      isUnique('').should.equal(true);
      isUnique('aaaaaa').should.equal(false);
    });
  });
  describe('isUniqueNo', function() {
    // isUnique but constant space
    it('should check if the input string has all unique characters', function() {
      isUniqueNo('abcdef').should.equal(true);
      isUniqueNo('').should.equal(true);
      isUnique('aaaaaa').should.equal(false);
    });
  });

  describe('checkPermutation', function() {
    it('should check if the two strings are permutations of the other', function() {
      checkPermutation('ok', 'ko').should.equal(true);
      checkPermutation('racecar', 'carrace').should.equal(true);
      checkPermutation('racecar', '').should.equal(false);
      checkPermutation('racecar', 'aaaaaaa').should.equal(false);
    });
  });
});
