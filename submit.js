function calculateVAT(price) {
  if (typeof price !== "number" || price < 0) {
    return "Invalid";
  }
  const vat = 7.5 / 100;
  return price * vat;
}

function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  } else if (
    contact.length > 11 ||
    contact.slice(0, 2) !== "01" ||
    contact.includes(" ")
  ) {
    return false;
  } else {
    return true;
  }
}

function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let passCount = 0;
  let failCount = 0;
  for (const mark of marks) {
    if (typeof mark !== "number") {
      return "Invalid";
    } else if (mark >= 50) {
      passCount++;
    } else {
      failCount++;
    }
  }
  return passCount > failCount ? true : false;
}
