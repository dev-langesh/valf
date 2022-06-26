function isalnum(value) {
  const regex = /[^a-zA-Z0-9]/g;
  return !regex.test(value);
}

module.exports = isalnum;
