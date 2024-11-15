export type SuitsType = Array<{
  suit: string;
  symbol: string;
}>;

export type CardsType = Array<{
  symbol: string;
  value: number;
}>;

export type CardDeckType = Array<{
  card: string;
  value: number;
  suit: string;
}>;

export type SameCardOccurencesReturnType = {
  pairs: number;
  threeOfAKind: number;
  fourOfAKind: number;
};
