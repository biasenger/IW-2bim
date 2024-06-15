document.getElementById('hoursForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const professorName = document.getElementById('professorName').value;
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
    const lessonsPerWeek = parseInt(document.getElementById('lessonsPerWeek').value) || 0;
    const hoursPerLesson = parseFloat(document.getElementById('hoursPerLesson').value) || 0;
    
    const totalHours = lessonsPerWeek * hoursPerLesson;
    const totalValue = totalHours * hourlyRate;
    
    document.getElementById('resultHeader').textContent = `Resultado para ${professorName}:`;
    document.getElementById('totalHours').textContent = `Total de Horas na Semana: ${totalHours.toFixed(2)} horas`;
    document.getElementById('totalValue').textContent = `Total: R$ ${totalValue.toFixed(2)}`;
});
