import { GroupedHandType, HandsRow } from "../types/types";

export const groupeHands = (rows: Array<HandsRow>) => {
  const groupedHands = rows.reduce(
    (acc: Record<number, GroupedHandType>, row) => {
      if (!acc[row.id]) {
        acc[row.id] = {
          id: row.id,
          created_at: row.created_at,
          hand_description: row.hand_description,
          cards: [],
        };
      }

      acc[row.id].cards.push({
        card: row.card,
        value: row.value,
        suit: row.suit,
      });

      return acc;
    },
    {} as Record<number, GroupedHandType>
  );

  return Object.values(groupedHands);
};
