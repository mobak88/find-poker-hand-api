const getData = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

let dealtCards;

const cardContainer = document.querySelector('.cards-container');
const dealCardsButton = document.querySelector('.deal-cards-button');
const handResult = document.querySelector('.hand-result');

const getCardSign = (card, value) => {
    if (value <= 10) {
        return value;
    } else {
        return card.split('')[0].toUpperCase();
    }
};
const getCardSuit = (suit) => {
    switch (suit) {
        case 'ruter':
            return 'diamond.svg';
        case 'hjerte':
            return 'heart.svg';
        case 'spar':
            return 'spade.svg';
        case 'kløver':
            return 'clover.svg';
        default:
            break;
    }
};

const cardColor = (suit) => suit === 'ruter' || suit === 'hjerte' ? true : false;

const dealCards = async () => {
    const dealtCards = await getData('http://localhost:3000/api/deal-cards');
    if (dealtCards && dealtCards.dealtCards) {
        const cardHTML = dealtCards.dealtCards.map(card => {
            return `
                <div class="card-wrapper">
                    <p class="card-number ${cardColor(card.suit) ? 'red-card' : ''}">${getCardSign(card.card, card.value)}</p>
                    <img src="assets/${getCardSuit(card.suit)}" alt="Description of SVG" class="card-suite-image">
                </div>
            `;
        }).join('');

        cardContainer.innerHTML = cardHTML;
        handResult.innerHTML = 'Du fikk' + ' ' + dealtCards.hand.split('-').join(' ');
        handResult.classList.add('hand-result');
    } else {
        console.error('No dealt cards received');
    }
};


dealCardsButton.onclick = async () => {
    dealCards();
};
