function sortNumbers() {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    let numbersArray = [num1, num2];
  
    numbersArray.sort(function(a, b) {
      return a - b;
    });
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Números Ordenados:</h3><p>${numbersArray.join(', ')}</p>`;
  }
  