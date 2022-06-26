const validateEmail = require("./validateEmail");
const validatePassword = require("./validatePassword");
const validateAge = require("./validateAge");
const isdigit = require("./primary/isdigit");
const isalpha = require("./primary/isalpha");
const isalnum = require("./primary/isalnum");

exports.validateEmail = validateEmail;
exports.validatePassword = validatePassword;
exports.validateAge = validateAge;
exports.isdigit = isdigit;
exports.isalpha = isalpha;
exports.isalnum = isalnum;
