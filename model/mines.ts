import {Random} from 'random-js';

const random = new Random();

type MinePosition = {row: number; column: number};
type MinePositions = Array<MinePosition>;

export const isPositionInMinePositions = (
  rowPos: number,
  columnPos: number,
  minePositions: MinePositions,
) => {
  return minePositions.some((item) => item.row === rowPos && item.column === columnPos);
};

export const getMinesPositions = (
  rows: number,
  columns: number,
  minesLength: number,
) => {
  let minesPositions: MinePositions = [];

  while (minesPositions.length < minesLength) {
    const rowPos = random.integer(0, rows - 1);
    const columnPos = random.integer(0, columns - 1);
    const isInMinesPositions = isPositionInMinePositions(
      rowPos,
      columnPos,
      minesPositions,
    );

    if (!isInMinesPositions) {
      minesPositions = [...minesPositions, {row: rowPos, column: columnPos}];
    }
  }

  return minesPositions;
};
