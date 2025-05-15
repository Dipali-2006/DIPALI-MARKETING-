# DIPALI-MARKETING-
I use these for free marketing 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Simple Calculator</title>
<style>
  body { font-family: Arial, sans-serif; margin: 2rem; }
  input, button { font-size: 1.2rem; padding: 0.5rem; margin: 0.2rem; }
  #result { margin-top: 1rem; font-weight: bold; }
</style>
</head>
<body>
<h2>Simple Calculator</h2>
<input id="num1" type="number" placeholder="Number 1" />
<input id="num2" type="number" placeholder="Number 2" />
<br />
<button onclick="calculate('+')">Add (+)</button>
<button onclick="calculate('-')">Subtract (-)</button>
<button onclick="calculate('*')">Multiply (*)</button>
<button onclick="calculate('/')">Divide (/)</button>
<div id="result"></div>

<script>
function calculate(op) {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  let res = '';
  if (isNaN(n1) || isNaN(n2)) {
    res = 'Please enter valid numbers!';
  } else {
    switch(op) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n2 !== 0 ? (n1 / n2) : 'Cannot divide by zero'; break;
    }
  }
  document.getElementById('result').innerText = 'Result: ' + res;
}
</script>
</body>
</html>
