function validateNumber(countryCode, number) {
  let regex, status;

  switch (countryCode) {
    case "IN":
      regex = /^[6-9]\d{9}$/;
      status = regex.test(number);
      break;
  }

  return status;
}

module.exports = validateNumber;
