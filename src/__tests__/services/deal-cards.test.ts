import { dealCards } from "../../services/deal-cards";
import { generateRandomNumber } from "../../utils/generate-random-number";

describe("dealCards", () => {
  it("Should deal five unique cards", () => {
    const testDeck = [
      { card: "as", value: 14, suit: "spar" },
      { card: "2h", value: 2, suit: "hjerte" },
      { card: "3r", value: 3, suit: "ruter" },
      { card: "4k", value: 4, suit: "kløver" },
      { card: "5s", value: 5, suit: "spar" },
      { card: "6h", value: 6, suit: "hjerte" },
      { card: "7r", value: 7, suit: "ruter" },
    ];

    const dealtCards = dealCards(testDeck, generateRandomNumber, 5);

    const uniqueCards = new Set(
      dealtCards.map((card) => `${card.card}-${card.suit}`)
    );

    expect(dealtCards.length).toBe(5);
    expect(uniqueCards.size).toBe(dealtCards.length);
  });
});
