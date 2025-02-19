function calculateVAT(price) {
  if (typeof price !== "number" || price < 0) {
    return "Invalid";
  }
  const vat = 7.5 / 100;
  return price * vat;
}
