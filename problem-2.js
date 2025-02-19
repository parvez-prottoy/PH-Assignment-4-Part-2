// Problem-02 :  Valid  Bangladeshi Number

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
console.log(validContact(true));
