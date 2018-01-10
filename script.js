function upperCaseC (c) {
  var ascii_value = c.charCodeAt(0);
  if (ascii_value < 97) {
    return c;
  }
 return String.fromCharCode(ascii_value - 32);
}

function upperCaseString(text) {
  var uc = '';
  for (var i = 0; i < text.length; i++) {
    uc = uc + upperCaseC(text[i]);
  }
  return uc;
}


