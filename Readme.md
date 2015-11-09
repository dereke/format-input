# Format Input

Format user input as a date/credit card/etc.

```bash
npm install format-input --save
```

# example

```js
var formatInput = require('format-input');

formatInput(document.getElementById('#date-of-birth'), 'cc/cc/cccc');
```

Now enter the date `19/05/1985`

When you type `190` it will be reformatted to `19/0`

as you continue it will be reformatted until it reaches the end of the given format.

You can also supply a different separator, in fact you can use any character except for the placeholder which defaults to `c` if this conflicts with your format (or you just don't like the letter 'c' then you can change the placeholder to something else, like `!`. `formatInput(element, '!!:!!, '!')`

