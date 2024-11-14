import { dealCards } from "../../services/deal-cards";
import { generateRandomNumber } from "../../utils/generate-random-number";

describe("dealCards", () => {
  it("Should deal five unique cards", () => {
    const testDeck = [
      { card: "AS", value: 14, suit: "spades" },
      { card: "2H", value: 2, suit: "hearts" },
      { card: "3D", value: 3, suit: "diamonds" },
      { card: "4C", value: 4, suit: "clubs" },
      { card: "5S", value: 5, suit: "spades" },
      { card: "6H", value: 6, suit: "hearts" },
      { card: "7D", value: 7, suit: "diamonds" },
    ];

    const dealtCards = dealCards(testDeck, generateRandomNumber, 5);

    const uniqueCards = new Set(
      dealtCards.map((card) => `${card.card}-${card.suit}`)
    );

    expect(dealtCards.length).toBe(5);
    expect(uniqueCards.size).toBe(dealtCards.length);
  });
});
