function isdigit(num) {
  let regex = /\D/g;
  return !regex.test(num);
}

module.exports = isdigit;
