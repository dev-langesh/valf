# valf

valf can validate your

- email
- password
  - calculate strength
  - provide appropriate requirements
- name
- age with specified conditions
- numbers
- strings

## Instalation

```sh
 $ npm i valf
```

Alternatively you can use yarn

```sh
 $ yarn add valf
```

Link to npm: [valf](http://npmjs.com/package/valf)

## Usage

### Validate Email

```js
const { validateEmail } = require("valf");

validateEmail("dev.langesh@gmail.com");
// return true

validateEmail("langeshgmail.com");
// return false
```

### Validate Password

```js
const { validatePassword } = require("valf");

let isValid = validatePassword("hello");
//  isvalid => {
//      requirements: [
//     "Length is too short",
//     "Required a uppercase character",
//     "Required a digit",
//     "Required a symbol",
//   ],
//   strength : 0
// }

isValid = validatePassword("Hello@123");
// isvalid => {
//     requirements :[],
//     strength : 100,
// }

// * You can pass optional email or name that must not be present in the given password
isValid = validatePassword("Hello@123", "hello@gmail.com");
// isValid => {
//   requirements: ["Remove your name or email in the password"],
//   strength: 80,
// }

isValid = validatePassword("Hello@123", "hello");
// isValid => {
//   requirements: ["Remove your name or email in the password"],
//   strength: 80,
// }
```

### Validate age

```js
const { validateAge } = require("valf");

validateAge(24);
// return true

validateAge(-20);
// return false

validateAge(140);
// return false

validateAge(age, { $gt: 18 });
// return true if age is greater than 18

validateAge(age, { $lt: 20 });
// return true if age is less than 20
```

### Options

- `$gt` greter than
- `$lt` less than
- `$gte` greater than or equal to
- `$lte` less than or equal to
- `$eq` equal to

### Validate Name

Should contain
- only alphabets
- numbers
- underscore 
- hyphen

```js
const { validateName } = require("valf");

validateName("langesh");
// return true

validateName("__Langesh__");

validateName("langesh@");
// return false
```

### Validate Mobile Numbers

Syntax:

```js
validateMobileNumber(countryCode, number);
```

Note:

Only `Indian numbers` are allowed.

Other formats are comming soon.

```js
const { validateMobileNumber } = require("valf");

validateMobileNumber("IN", 7387634562);
// return true

validateMobileNumber("IN", 4516273893);
// return false
```

Some other valid formats:

- 9883443344
- 09883443344
- 919883443344
- 0919883443344
- +919883443344
- +91-9883443344
- 0091-9883443344
- +91 -9883443344
- +91- 9883443344
- +91 - 9883443344
- 0091 - 9883443344

### Other Methods

```js
isdigit(string); // checks whether a string contains digit or not

isalpha(string); // checks whether a string contains alphabets or not

isalnum(string); // checks whether a string contains alphabets or digits
```
