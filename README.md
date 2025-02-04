# Backend using Node js

## 1. Import/Export in Node js.
1. Modules protects functions and variables to prevent leaks.
2. It can only be exposed using `module.exports` keyword.
3. Multiple functions, variables can be exported using object. `module.exports = {}`

```javascript
const calculateSum = require('./fileName.js') // Single Import
const {x, calculateSum} = require('./fileName') // Multiple Import

console.log("hello world!")
console.log(calculateSum(2,4))
```


```javascript
function calculateSum(n1, n2){
    return n1+n2
}
const x = 10 // If needs to be exported

module.exports = calculateSum // Single Export
module.exports = {x: x, calculateSum:calculateSum} // Multiple Export
```

| Commonjs Module Pattern (cjs) |       ES Module Pattern (esm)       | 
|:------------------------------|:-----------------------------------:|
| module.exports<br/> require() |          import<br/>export          |
| By default used in nodejs     | By default used in Reactjs, Angular |
| Older way                     |            New approach             |
| Synchronous                   |            Asynchronous             |
| Non Strict Mode               |             Strict Mode             |