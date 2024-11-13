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

    const likeButton = document.createElement('button');
    likeButton.className = 'like-button';
    likeButton.textContent = 'Like';
    likeButton.onclick = () => {
      showMikDetails();
    };
    cardDiv.appendChild(likeButton);

    container.appendChild(cardDiv);
  });
}

function showMikDetails() {
  document.getElementById('card-container').style.display = 'none';
  document.getElementById('mik-details').style.display = 'block';
}

function backToCards() {
  document.getElementById('card-container').style.display = 'flex';
  document.getElementById('mik-details').style.display = 'none';
}
