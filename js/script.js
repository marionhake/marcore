fetch('cards.json')
  .then(response => response.json())
  .then(data => {
    createCards(data);
  })
  .catch(error => console.error('Error loading card data:', error));

function createCards(data) {
  const container = document.getElementById('card-container');

  Object.values(data).forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    cardDiv.onclick = () => {
      localStorage.setItem('selectedCard', JSON.stringify(card));
      window.location.href = 'mik.html';
    };

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = card.Name;
    cardDiv.appendChild(name);

    const rarity = document.createElement('div');
    rarity.className = `rarity rarity-${card.Rarity.toLowerCase()}`;
    rarity.textContent = card.Rarity;
    cardDiv.appendChild(rarity);

    const hp = document.createElement('div');
    hp.className = 'hp';
    hp.textContent = `HP: ${card.hp}`;
    cardDiv.appendChild(hp);

    const damage = document.createElement('div');
    damage.className = 'damage';
    damage.textContent = `Damage: ${card.damage}`;
    cardDiv.appendChild(damage);

    const type = document.createElement('div');
    type.className = 'type';
    type.textContent = `Type: ${card.Stage}`;
    cardDiv.appendChild(type);

    const energy = document.createElement('div');
    energy.className = 'energy';
    energy.textContent = `Energy: ${card.energy}`;
    cardDiv.appendChild(energy);

    if (card.evole) {
      const evolve = document.createElement('div');
      evolve.className = 'evolve';
      evolve.textContent = `Evolves into: ${card.evole}`;
      cardDiv.appendChild(evolve);
    }

    container.appendChild(cardDiv);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const cardData = JSON.parse(localStorage.getItem('selectedCard'));
  
  if (cardData) {
    document.getElementById('card-name').textContent = cardData.Name;
    document.getElementById('card-rarity').textContent = `Rarity: ${cardData.Rarity}`;
    document.getElementById('card-hp').textContent = `HP: ${cardData.hp}`;
    document.getElementById('card-damage').textContent = `Damage: ${cardData.damage}`;
    document.getElementById('card-type').textContent = `Type: ${cardData.Stage}`;
    document.getElementById('card-energy').textContent = `Energy: ${cardData.energy}`;
    
    if (cardData.evole) {
      document.getElementById('card-evolve').textContent = `Evolves into: ${cardData.evole}`;
    }
  }
});

function backToCards() {
  window.location.href = 'home';
}
