fetch('cards.json')
  .then(response => response.json())
  .then(data => {
    createCards(data);
  })
  .catch(error => console.error('Error loading card data:', error));


function createCards(data) {
  const container = document.getElementById('card-container');


  const isGreece = navigator.language === 'el' || navigator.language === 'el-GR';

  Object.values(data).forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');


    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = isGreece ? translateToGreek(card.Name) : card.Name;
    cardDiv.appendChild(name);

    const rarity = document.createElement('div');
    rarity.className = `rarity rarity-${card.Rarity.toLowerCase()}`;
    rarity.textContent = isGreece ? translateToGreek(card.Rarity) : card.Rarity;
    cardDiv.appendChild(rarity);

    const hp = document.createElement('div');
    hp.className = 'hp';
    hp.textContent = `${isGreece ? 'Ζωή' : 'HP'}: ${card.hp}`;
    cardDiv.appendChild(hp);

    const damage = document.createElement('div');
    damage.className = 'damage';
    damage.textContent = `${isGreece ? 'Ζημιά' : 'Damage'}: ${card.damage}`;
    cardDiv.appendChild(damage);

    const type = document.createElement('div');
    type.className = 'type';
    type.textContent = `${isGreece ? 'Τύπος' : 'Type'}: ${isGreece ? translateToGreek(card.Stage) : card.Stage}`;
    cardDiv.appendChild(type);

    const energy = document.createElement('div');
    energy.className = 'energy';
    energy.textContent = `${isGreece ? 'Ενέργεια' : 'Energy'}: ${isGreece ? translateToGreek(card.energy) : card.energy}`;
    cardDiv.appendChild(energy);

    container.appendChild(cardDiv);
  });
}


function translateToGreek(word) {
  const translations = {
    "Name Of Card": "Όνομα Κάρτας",
    "Rare": "Σπάνιο",
    "Legendary": "Θρυλικό",
    "Basic": "Βασικό",
    "Epic": "Επικό",
    "HP": "Ζωή",
    "Damage": "Ζημιά",
    "Type": "Τύπος",
    "Energy": "Ενέργεια",
    "fire": "φωτιά",
    "earth": "γη",
    "psyxic": "ψυχικό",
    "blue fire": "μπλε φωτιά"
  };
  return translations[word] || word;
}
