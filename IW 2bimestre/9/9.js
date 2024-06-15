const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga', 'melancia', 'melão', 'morango', 'abacaxi', 'cereja', 'maracujá', 'mamão', 'kiwi'];

const mFruits = frutas.filter(function(fruta) {
  return fruta.toLowerCase().startsWith('m');
});

const mFruitsListDiv = document.getElementById('mFruitsList');

const ul = document.createElement('ul');

mFruits.forEach(function(fruta) {
  const li = document.createElement('li');
  li.textContent = fruta;
  ul.appendChild(li);
});

mFruitsListDiv.appendChild(ul);
