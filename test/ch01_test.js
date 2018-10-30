const chai = require('chai');

const should = chai.should();

const {
  isUnique,
  isUnique1,
  checkPermutation,
  urlify,
  palindromePermutation,
  oneAway
} = require('../problems/ch01');

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
      isUnique1('abcdef').should.equal(true);
      isUnique1('').should.equal(true);
      isUnique1('aaaaaa').should.equal(false);
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

  describe('URLify', function() {
    it("should replace all spaces in a string with '%20'", function() {
      urlify('Hello World').should.equal.to('Hello%20World');
      urlify('What a nice day today').should.equal.to(
        'What%20a%20nice%20day%20today'
      );
    });
  });

  describe('palindromePermutation', function() {
    it('should check if it is a permutation of a palindrome', function() {
      palindromePermutation('Tact Coa').should.equal(true);
    });
  });

  describe('oneAway', function() {
    it('should check if the two strings are one edit (or zero edits) away from each other', function() {
      oneAway('pale', 'ple').should.equal(true);
      oneAway('pales', 'pale').should.equal(true);
      oneAway('pale', 'bale').should.equal(true);
      oneAway('pale', 'bake').should.equal(false);
    });
  });
});
