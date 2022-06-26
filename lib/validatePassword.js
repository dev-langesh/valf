function validatePassword(password, optionalNameOrEmail) {
  let strength = 0,
    requirements = [],
    stepUp = 25,
    nameOrEmail = optionalNameOrEmail;

  if (nameOrEmail) stepUp = 20;

  if (!password) return "Password required";

  // checking length
  if (password.length >= 8) strength += stepUp;
  else requirements.push("Length is too short");

  // checking upercase
  if (/[A-Z]/g.test(password)) strength += stepUp;
  else requirements.push("Required a uppercase character");

  // checking digit
  if (/\d/g.test(password)) strength += stepUp;
  else requirements.push("Required a digit");

  // checking symbol
  if (/[^a-zA-Z0-9]/g.test(password)) strength += stepUp;
  else requirements.push("Required a symbol");

  // checking name present in password
  if (nameOrEmail) {
    let name = nameOrEmail.split("@")[0];

    let regex = new RegExp(name, "gi");
    if (!regex.test(password)) {
      strength += stepUp;
    } else requirements.push("Remove your name or email in the password");
  }

  return { requirements, strength };
}

module.exports = validatePassword;
