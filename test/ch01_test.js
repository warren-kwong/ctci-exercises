const chai = require('chai');

const should = chai.should();

const {
  isUnique,
  isUnique1,
  checkPermutation,
  urlify,
  palindromePermutation,
  oneAway,
  stringCompression,
  rotateMatrix,
  zeroMatrix,
  stringRotation
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
      urlify('Hello World').should.equal('Hello%20World');
      urlify('What a nice day today').should.equal(
        'What%20a%20nice%20day%20today'
      );
    });
  });

  describe('palindromePermutation', function() {
    xit('should check if it is a permutation of a palindrome', function() {
      palindromePermutation('Tact Coa').should.equal(true);
    });
  });

  describe('oneAway', function() {
    xit('should check if the two strings are one edit (or zero edits) away from each other', function() {
      oneAway('pale', 'ple').should.equal(true);
      oneAway('pales', 'pale').should.equal(true);
      oneAway('pale', 'bale').should.equal(true);
      oneAway('pale', 'bake').should.equal(false);
    });
  });

  describe('stringCompression', function() {
    xit('should "compress" the input string \(ex. aabcccccaaaa becomes a2b1c5a3\)', function() {
      stringCompression('aaaaaaa').should.equal('a7');
      stringCompression('aabcccccaaa').should.equal('a2b1c5a3');
    });
    xit('should return the original input if the compressed string is longer than the original string', function() {
      stringCompression('a').should.equal('a');
      stringCompression('abcdefg').should.equal('abcdefg');
    });
  });

  describe('rotateMatrix', function() {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    const matrix1answer = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
  
    xit('', function() {
      rotateMatrix(matrix1).should.equal(matrix1answer);
    })
  });

  describe('zeroMatrix', function() {
    const matrix1 = [
      [1, 2, 3], 
      [4, 5, 6], 
      [7, 8, 9]
    ];

    const matrix2 = [
      [0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0]
    ]

    const matrix2answer = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ]

    const matrix3 = [
      [0, 1],
      [1, 1],
      [1, 1],
    ]

    const matrix3answer = [
      [0, 0],
      [0, 1],
      [0, 1],
    ]

    xit('', function() {
      zeroMatrix(matrix1).should.equal(matrix1);
      zeroMatrix(matrix2).should.equal(matrix2answer);
      zeroMatrix(matrix3).should.equal(matrix3answer);
    })
  });

  describe('stringRotation', function() {
    xit('', function() {
      stringRotation().should.equal();
    })
  })

});
