// CTCI Chapter 1: Arrays & Strings

// 1.1 Is Unique
// **************************************
// implement an algorithm to determine if a string has all unique characters.
const isUnique = s => {
  const o = {};
  for (let i = 0; i < s.length; i++) {
    const l = s.charAt(i);
    if (!o[l]) {
      o[l] = l;
    } else {
      return false;
    }
  }
  return true;
};

// What if you cannot use additional data structures?
const isUnique1 = s => {
  let l = s.split('').sort();
  for (let i = 1; i < l.length; i++) {
    if (l[i] === l[i - 1]) {
      return false;
    }
  }
  return true;
};

// 1.2 Check Permutation
// **************************************
// Given two strings, write a method to decide if one is a permutation of the other
const checkPermutation = (s1, s2) => {
  return (
    s1
      .split('')
      .sort()
      .join() ===
    s2
      .split('')
      .sort()
      .join()
  );
};

// 1.3 URLify
// **************************************
// Write a method to replace all spaces in a string with '%20'.
const urlify = s => {
  return s.split(' ').join('%20');
};

// 1.4 Palindrome Permutation
// **************************************
// Give a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of the letters. The palindrome does not need to be limited to just dictionary words.
const palindromePermutation = s => {};

// 1.5 One Away
// **************************************
// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.  Given two strings, write a function to check if they are one edit (or zero edits) away
const oneAway = (s1, s2) => {


};

// 1.6 String Compression
// **************************************
// Implement a method to perform basic string compression using the counts of repeated characters.  For example, the string aabcccccaaa would become a2b1c5a3.  If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)
const stringCompression = s => {};

// 1.7 Rotate Matrix
// **************************************
// Given an image represeted by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. 
// Can you do this in place?
const rotateMatrix = matrix => {};

// 1.8 Zero Matrix
// **************************************
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
const zeroMatrix = matrix => {};

// 1.9 String Rotation
// **************************************
// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check i f s2 is a rotation of s1 using only one call to isSubstring(e.g. "waterbottle" is a rotation of "erbottlewat").
const stringRotation = (s1, s2) => {}

// **************************************
module.exports = {
  isUnique,
  isUnique1,
  checkPermutation,
  urlify,
  palindromePermutation,
  oneAway,
  stringCompression
};
