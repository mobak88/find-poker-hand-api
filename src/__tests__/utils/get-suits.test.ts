import { getSuits } from "../../utils/get-suits";

describe("getSuits", () => {
  it("Should return an array of strings with suits", () => {
    const suitedCards = [
      { card: "4h", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "9r", value: 9, suit: "ruter" },
    ];

    expect(getSuits(suitedCards)).toStrictEqual([
      "ruter",
      "ruter",
      "ruter",
      "ruter",
      "ruter",
    ]);

    const cards = [
      { card: "4h", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "9h", value: 9, suit: "hjerte" },
    ];

    expect(getSuits(cards)).toStrictEqual([
      "ruter",
      "ruter",
      "ruter",
      "ruter",
      "hjerte",
    ]);
  });
});
