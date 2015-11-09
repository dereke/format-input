splice = function(value, idx, rem, s ) {
  return (value.slice(0,idx) + s + value.slice(idx + Math.abs(rem)));
};
module.exports = function(el, format, placeholder){
  placeholder = placeholder || 'c';
  var placeholderRegex = new RegExp(placeholder, 'g');
  var formatChars = format.replace(placeholderRegex, '');
  var formatCharsRegex = new RegExp('['+formatChars+']', 'g');

  el.addEventListener('keypress', function(e){
    var pressedChar = String.fromCharCode(e.keyCode || e.charCode);
    var value = e.target.value.replace(formatCharsRegex, '');

    for (var index=0; index < format.length; index++){
      var isSeparator = format[index] !== placeholder;
      if(value.length >= index && isSeparator) {
        var pressedSeparator =  formatChars.indexOf(format[index]) !== -1 &&
                                formatChars.indexOf(pressedChar) !== -1;

        if (pressedSeparator) {
          e.preventDefault();
        }
        value = splice(value, index, 0, format[index]);
      }
    }
    if (e.target.value !== value) {
      e.target.value = value;
    }
  });
};
