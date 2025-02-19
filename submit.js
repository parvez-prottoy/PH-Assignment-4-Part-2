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

function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }
  const properties = "name,gender,age";
  if (
    Object.keys(person1).toString() !== properties ||
    Object.keys(person2).toString() !== properties
  ) {
    return "Invalid";
  } else if (
    person1.gender === person2.gender ||
    Math.abs(person1.age - person2.age) > 7
  ) {
    return false;
  } else {
    return true;
  }
}

function calculateSleepTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }
  let calculate = 0;
  for (const time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    calculate += time;
  }
  let hour = Math.floor(calculate / 3600);
  let minute = Math.floor((calculate % 3600) / 60);
  let second = calculate % 60;
  return { hour, minute, second };
}
