function validatePassword(password) {
  let strength = 0,
    requirements = [];

  if (!password) return "Password required";

  // checking length
  if (password.length >= 8) strength += 25;
  else requirements.push("Length is too short");

  // checking upercase
  if (/[A-Z]/g.test(password)) strength += 25;
  else requirements.push("Required a uppercase character");

  // checking digit
  if (/\d/g.test(password)) strength += 25;
  else requirements.push("Required a digit");

  // checking symbol
  if (/[^a-zA-Z0-9]/g.test(password)) strength += 25;
  else requirements.push("Required a symbol");

  return { requirements, strength };
}

module.exports = validatePassword;
