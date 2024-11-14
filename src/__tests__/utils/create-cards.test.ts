import { createCardDeck } from "../../utils/create-cards";
import { cards, suits } from "../../variables/card-deck";

describe("createCardDeck", () => {
  it("Should return an array with 52 cards", () => {
    const cardDeck = createCardDeck(suits, cards);
    expect(cardDeck.length).toBe(52);
  });

  it("Should contain unique cards", () => {
    const cardDeck = createCardDeck(suits, cards);
    const uniqueCards = new Set(
      cardDeck.map((card) => `${card.card}-${card.suit}`)
    );
    expect(uniqueCards.size).toBe(cardDeck.length);
  });

  it("Should have 13 cards per suit", () => {
    const cardDeck = createCardDeck(suits, cards);
    const suitCount = cardDeck.reduce((acc, card) => {
      acc[card.suit] = (acc[card.suit] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    suits.forEach((suit) => {
      expect(suitCount[suit.suit]).toBe(13);
    });
  });
});
