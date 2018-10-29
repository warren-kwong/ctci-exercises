// Given two strings, write a method to decide if one is a permutation of the other

module.exports = {
  checkPermutation(s1, s2) {
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
  }
};
