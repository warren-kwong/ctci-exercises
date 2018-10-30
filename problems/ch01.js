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
// Give a string, write a function to check if it is a permutation of a plandrime. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of the letters. The palindrome does not need to be limited to just dictionary words.
const palindromePermutation = s => {};

// 1.5 One Away
// **************************************
// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.  Given two strings, write a function to check if they are one edit (or zero edits) away
const oneAway = (s1, s2) => {};

// **************************************
module.exports = {
  isUnique,
  isUnique1,
  checkPermutation,
  urlify,
  palindromePermutation,
  oneAway
};
