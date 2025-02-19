// Problem-03 : Admission Success  (📚 Will He Succeed?)

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
console.log(willSuccess(90));
