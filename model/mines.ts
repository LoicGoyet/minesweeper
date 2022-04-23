import {Random} from 'random-js';
import {arrayCount} from '../utils/array';
import {CellPosition, CellPositions, getNeighborCellPositions} from './cell';

const random = new Random();

export const isPositionInMinePositions = (
  rowPos: number,
  columnPos: number,
  minePositions: CellPositions,
) => {
  return minePositions.some((item) => item.row === rowPos && item.column === columnPos);
};

export const getMinesPositions = (
  rows: number,
  columns: number,
  minesLength: number,
) => {
  let minesPositions: CellPositions = [];

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

export const getNeighborMinesCount = (
  row: CellPosition['row'],
  column: CellPosition['column'],
  minePositions: CellPositions,
) => {
  const neighborCellPositions = getNeighborCellPositions(row, column);

  return arrayCount((cellPosition) => {
    return minePositions.some((minePosition) => {
      return (
        minePosition.row === cellPosition.row &&
        minePosition.column === cellPosition.column
      );
    });
  }, neighborCellPositions);
};
