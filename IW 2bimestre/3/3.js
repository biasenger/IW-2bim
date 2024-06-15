document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.getElementById('numberForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const num1 = parseInt(document.getElementById('num1').value);
      const num2 = parseInt(document.getElementById('num2').value);
      const num3 = parseInt(document.getElementById('num3').value); 

      let numbersArray = [num1, num2, num3];
  
      console.log("Array original:", numbersArray);

      numbersArray.sort(function(a, b) {
        return a - b;
      });
  
      console.log("Array ordenado:", numbersArray);

      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<h3>Array Ordenado:</h3><p>${numbersArray.join(', ')}</p>`;
    });
  });
  