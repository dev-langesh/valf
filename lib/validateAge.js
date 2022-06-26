function validateAge(age, condition) {
  if (age > 100 || age < 0) return false;
  if (condition) {
    const k = Object.keys(condition)[0];
    const v = Object.values(condition)[0];

    const option = ["$gt", "$lt", "$lte", "$gte", "$eq"];
    if (option.includes(k)) {
      switch (k) {
        case "$gt":
          return age > v;
        case "$lt":
          return age < v;

        case "$lte":
          return age <= v;

        case "$gte":
          return age >= v;

        case "$eq":
          return age === v;
      }
    } else {
      return "Invalid option";
    }
  }
  return true;
}

module.exports = validateAge;
