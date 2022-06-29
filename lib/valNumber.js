function validateNumber(countryCode, number) {
  let regex, status;

  switch (countryCode) {
    case "IN":
      regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
      status = regex.test(number.toString());
      break;
  }

  return status;
}

module.exports = validateNumber;
