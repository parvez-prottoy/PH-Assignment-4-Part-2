// Problem-04: Valid Proposal

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
console.log(validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan"));
