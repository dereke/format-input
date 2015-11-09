var formatInput = require('../');
var browser = require('browser-monkey');

describe('formats input', function(){
  var input = browser.find('input');
  var el;
  beforeEach(function(){
    while(document.body.hasChildNodes()){
      document.body.removeChild(document.body.lastChild);
    }
    el = document.createElement('input');
    el.type = 'text';
    document.body.appendChild(el);
  });

  it('partial match begins formatting', function(){
    formatInput(el, 'cc/cc/cccc');
    return input.typeIn('190').then(function(){
      return input.shouldHave({value: '19/0'});
    });
  });

  it('formats input as a date', function(){
    formatInput(el, 'cc/cc/cccc');
    return input.typeIn('19051921').then(function(){
      return input.shouldHave({value: '19/05/1921'});
    });
  });

  it('formats input as a credit card', function(){
    formatInput(el, 'cccc-cccc-cccc-cccc');
    return input.typeIn('4111411141114111').then(function(){
      return input.shouldHave({value: '4111-4111-4111-4111'});
    });
  });

  it('can use an alternate placeholder character', function(){
    formatInput(el, 'ss/ss/ssss', 's');
    return input.typeIn('19051921').then(function(){
      return input.shouldHave({value: '19/05/1921'});
    });
  });

  it('removes duplicate separators', function(){
    formatInput(el, 'ss/ss/ssss', 's');
    return input.typeIn('19').then(function(){
      return input.typeIn('//05/1921', {mode: 'append'});
    }).then(function(){
      return input.shouldHave({value: '19/05/1921'});
    });
  });
});
