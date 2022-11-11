let exclamation = '!'

function exclaim(str) {
  return str + exclamation;
}

function setExclamation(str) {
  exclamation = str;
}

module.exports = {
  exclaim,
  setExclamation,
}
