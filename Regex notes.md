# Regex notes

## 1. Regex pattern and use examples

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the **<u>exec() and test()</u>** methods of RegExp, and with the **<u>match(), matchAll(), replace(), replaceAll(), search(), and split()</u>** methods of String.

```javascript
const re = /pattern/flags; 
// OR
// here '/' are not used
const re = new RegExp('pattern', 'flags');

const str = 'string'

// Generally match() method of string is used, exec() method of RegExp can also be used.
// match returns array of matched substring or null
const resultArray = str.match(re)
```

For more details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

