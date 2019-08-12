export const numberToMoney = (
  number = "0",
  withPrefix = false,
  currency = "Rp."
) => {
  return `${currency} ${parseInt(number, 10)
    .toLocaleString()
    .replace(/,/g, ".")}${withPrefix ? ",00-" : ""}`;
};

export const moneyToNumber = (money = "0", currency = "Rp.") => {
  money = money
    .toString()
    .replace(currency, "")
    .replace(/\./g, "")
    .trim();

  if (money === "") return 0;

  return parseInt(money, 10);
};
