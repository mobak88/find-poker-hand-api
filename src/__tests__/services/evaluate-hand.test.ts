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

    expect(straightFlushHandResult).toStrictEqual({
      hand: "straight-flush",
      rank: 1,
    });

    const fourOfAKindHand = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "4k", value: 4, suit: "kløver" },
      { card: "4h", value: 4, suit: "hjerte" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const fourOfAKindHandResult = evaluateHand(fourOfAKindHand);

    expect(fourOfAKindHandResult).toStrictEqual({
      hand: "four-of-a-kind",
      rank: 2,
    });

    const house = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5k", value: 5, suit: "kløver" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const houseResult = evaluateHand(house);

    expect(houseResult).toStrictEqual({
      hand: "full-house",
      rank: 3,
    });

    const flushHand = [
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "9r", value: 9, suit: "ruter" },
    ];

    const flushHandResult = evaluateHand(flushHand);

    expect(flushHandResult).toStrictEqual({
      hand: "flush",
      rank: 4,
    });

    const straightHand = [
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "8h", value: 8, suit: "hjerte" },
    ];

    const straightHandResult = evaluateHand(straightHand);

    expect(straightHandResult).toStrictEqual({
      hand: "straight",
      rank: 5,
    });

    const threeOfAKindHand = [
      { card: "6s", value: 6, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "5k", value: 5, suit: "kløver" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const threeOfAKindHandResult = evaluateHand(threeOfAKindHand);

    expect(threeOfAKindHandResult).toStrictEqual({
      hand: "three-of-a-kind",
      rank: 6,
    });

    const twoPairsHand = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "6k", value: 6, suit: "kløver" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "5s", value: 5, suit: "spar" },
    ];

    const twoPairsHandResult = evaluateHand(twoPairsHand);

    expect(twoPairsHandResult).toStrictEqual({
      hand: "two-pairs",
      rank: 7,
    });

    const pairHand = [
      { card: "4s", value: 4, suit: "spar" },
      { card: "4r", value: 4, suit: "ruter" },
      { card: "6k", value: 6, suit: "kløver" },
      { card: "7r", value: 7, suit: "ruter" },
      { card: "8s", value: 8, suit: "spar" },
    ];

    const pairHandResult = evaluateHand(pairHand);

    expect(pairHandResult).toStrictEqual({
      hand: "pair",
      rank: 8,
    });

    const higCardHand = [
      { card: "4h", value: 4, suit: "ruter" },
      { card: "5r", value: 5, suit: "ruter" },
      { card: "6r", value: 6, suit: "ruter" },
      { card: "7s", value: 7, suit: "spar" },
      { card: "9r", value: 9, suit: "ruter" },
    ];

    const higCardHandResult = evaluateHand(higCardHand);

    expect(higCardHandResult).toStrictEqual({
      hand: "high-card",
      rank: 9,
    });
  });
});
