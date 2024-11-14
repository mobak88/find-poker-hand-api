import {
  countSameCardOccurrences,
  findHighCard,
  isFlush,
  isStraight,
} from "../../utils/hand-evaluators";

describe("isFlush", () => {
  it("Should check if all suits are equal", () => {
    const notFlushHand = ["ruter", "ruter", "ruter", "ruter", "hjerte"];

    const flushHand = ["ruter", "ruter", "ruter", "ruter", "ruter"];

    expect(isFlush(flushHand)).toBe(true);
    expect(isFlush(notFlushHand)).toBe(false);
  });
});

describe("isStraight", () => {
  it("Should check if cards are sequential", () => {
    const sequentialCards = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6k", value: 6, suit: "ruter" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "8r", value: 8, suit: "ruter" },
    ];

    const notSequentialCards = [
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7s", value: 7, suit: "spar" },
      { card: "9r", value: 9, suit: "ruter" },
    ];

    const sequentialCardsAceToFive = [
      { card: "Ar", value: 1, suit: "ruter" },
      { card: "2h", value: 2, suit: "hjerte" },
      { card: "3s", value: 3, suit: "spar" },
      { card: "4k", value: 4, suit: "kløver" },
      { card: "5k", value: 5, suit: "kløver" },
    ];

    expect(isStraight(sequentialCards)).toBe(true);
    expect(isStraight(sequentialCardsAceToFive)).toBe(true);
    expect(isStraight(notSequentialCards)).toBe(false);
  });
});

describe("countSameCardOccurrences", () => {
  it("Should count number of same cards occurrences", () => {
    const pair = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "6k", value: 6, suit: "kløver" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "8s", value: 8, suit: "spar" },
    ];

    const pairCounted = countSameCardOccurrences(pair);

    expect(pairCounted).toStrictEqual({
      pairs: 1,
      threeOfAKind: 0,
      fourOfAKind: 0,
    });

    const twoPairs = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "6k", value: 6, suit: "kløver" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const twoPairsCounted = countSameCardOccurrences(twoPairs);

    expect(twoPairsCounted).toStrictEqual({
      pairs: 2,
      threeOfAKind: 0,
      fourOfAKind: 0,
    });

    const house = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5k", value: 5, suit: "kløver" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const houseCounted = countSameCardOccurrences(house);
    expect(houseCounted).toStrictEqual({
      pairs: 1,
      threeOfAKind: 1,
      fourOfAKind: 0,
    });

    const fourOfAKind = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "4k", value: 4, suit: "kløver" },
      { card: "4h", value: 4, suit: "hjerte" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const fourOfAKindCounted = countSameCardOccurrences(fourOfAKind);

    expect(fourOfAKindCounted).toStrictEqual({
      pairs: 0,
      threeOfAKind: 0,
      fourOfAKind: 1,
    });
  });

  describe("findHighCard", () => {
    it("Should find the highest card in a given array", () => {
      const cards = [
        { card: "4h", value: 4, suit: "ruter" },
        { card: "5r", value: 5, suit: "ruter" },
        { card: "6r", value: 6, suit: "ruter" },
        { card: "7s", value: 7, suit: "spar" },
        { card: "9r", value: 9, suit: "ruter" },
      ];

      const highCard = findHighCard(cards);

      expect(highCard).toBe(9);
    });
  });
});
