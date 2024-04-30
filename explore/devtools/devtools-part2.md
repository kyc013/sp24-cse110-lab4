1. the values of `num1` and `num2` are retrieved as strings from input, so they are being concatenated instead of added mathematically.

2. parse the input values as numbers before addition

```javascript
function calculateSum(num1, num2) {
  let result = parseInt(num1) + parseInt(num2);
  return result;
}
```
