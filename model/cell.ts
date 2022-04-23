import {generateArray} from '../utils/array';
import {getMinesPositions, isPositionInMinePositions} from './mines';

export type Cell = {
  row: number;
  column: number;
  id: string;
  isRevealed: boolean;
  hasMine: boolean;
};

const generateCell = (row: number, column: number, hasMine: boolean): Cell => {
  return {
    row,
    column,
    id: `${row}-${column}`,
    isRevealed: false,
    hasMine,
  };
};

export type CellMap = Array<Array<Cell>>;

export const generateCellMap = (
  rows: number,
  columns: number,
  minesLength: number,
): CellMap => {
  const rowsArr = generateArray(rows);
  const columnsArr = generateArray(columns);
  const minesPositions = getMinesPositions(rows, columns, minesLength);

  return rowsArr.map((row) => {
    return columnsArr.map((column) => {
      const hasMine = isPositionInMinePositions(row, column, minesPositions);
      return generateCell(row, column, hasMine);
    });
  });
};

export const mapCellMap = <F>(cbFn: (cell: Cell) => F, cellMap: CellMap) => {
  return cellMap.map((row) => {
    return row.map((cell) => {
      return cbFn(cell);
    });
  });
};
