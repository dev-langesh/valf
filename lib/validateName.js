function validateName(name) {
  const regex = /[^A-Za-z0-9_-]/g;
  return !regex.test(name);
}

module.exports = validateName;
