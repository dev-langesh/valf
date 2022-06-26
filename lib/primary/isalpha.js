function isalpha(string) {
  const regex = /[^A-Za-z]/g;
  return !regex.test(string);
}

module.exports = isalpha;
