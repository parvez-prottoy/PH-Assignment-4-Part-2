// Problem-05: Let’s Calculate Total Sleep Time

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
console.log(calculateSleepTime([100, 3800, "90"]));
