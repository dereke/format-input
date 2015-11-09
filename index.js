splice = function(value, idx, rem, s ) {
  return (value.slice(0,idx) + s + value.slice(idx + Math.abs(rem)));
};
module.exports = function(el, format, placeholder){
  placeholder = placeholder || 'c';

  el.addEventListener('keypress', function(e){
    var value = e.target.value;
    for (var index=0; index < format.length; index++){
      if(value.length >= index){
        if (format[index] !== placeholder && format[index] !== value[index]) {
          value = splice(value, index, 0, format[index]);
        }
      }
    }
    e.target.value = value;
  });
};
