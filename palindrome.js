function palindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters for a more robust palindrome check
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
}
palindrome("nown");
