import { evaluateHand } from "../../services/evaluate-hand";

describe("evaluateHand", () => {
  it("Should return what hand was dealt", () => {
    const straightFlushHand = [
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "8r", value: 8, suit: "ruter" },
    ];

    const straightFlushHandResult = evaluateHand(straightFlushHand);

    expect(straightFlushHandResult).toBe("straight-flush");

    const fourOfAKindHand = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "4k", value: 4, suit: "kløver" },
      { card: "4h", value: 4, suit: "hjerte" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const fourOfAKindHandResult = evaluateHand(fourOfAKindHand);

    expect(fourOfAKindHandResult).toBe("four-of-a-kind");

    const house = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5k", value: 5, suit: "kløver" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const houseResult = evaluateHand(house);

    expect(houseResult).toBe("full-house");

    const flushHand = [
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "9r", value: 9, suit: "ruter" },
    ];

    const flushHandResult = evaluateHand(flushHand);

    expect(flushHandResult).toBe("flush");

    const straightHand = [
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "8h", value: 8, suit: "hjerte" },
    ];

    const straightHandResult = evaluateHand(straightHand);

    expect(straightHandResult).toBe("straight");

    const threeOfAKindHand = [
      { card: "6s", value: 6, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5k", value: 5, suit: "kløver" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const threeOfAKindHandResult = evaluateHand(threeOfAKindHand);

    expect(threeOfAKindHandResult).toBe("three-of-a-kind");

    const twoPairsHand = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "6k", value: 6, suit: "kløver" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const twoPairsHandResult = evaluateHand(twoPairsHand);

    expect(twoPairsHandResult).toBe("two-pairs");

    const pairHand = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "6k", value: 6, suit: "kløver" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "8s", value: 8, suit: "spar" },
    ];

    const pairHandResult = evaluateHand(pairHand);

    expect(pairHandResult).toBe("pair");

    const higCardHand = [
      { card: "4h", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7s", value: 7, suit: "spar" },
      { card: "9r", value: 9, suit: "ruter" },
    ];

    const higCardHandResult = evaluateHand(higCardHand);

    expect(higCardHandResult).toBe("high-card");
  });
});
