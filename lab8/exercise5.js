function checkPalindrom(txt) {
  let reversedTxt = txt.split("").reverse().join("");
  return reversedTxt === txt;
}
