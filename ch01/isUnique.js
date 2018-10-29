// implement an algorithm to determine if a string has all unique characters.

module.exports = {
  isUnique(s) {
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
  },
  // What if you cannot use additional data structures?
  isUniqueNo(s) {
    let l = s.split('').sort();
    for (let i = 1; i < l.length; i++) {
      if (l[i] === l[i - 1]) {
        return false;
      }
    }
    return true;
  }
};
