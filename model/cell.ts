import {generateArray} from '../utils/array';
import {
  getMinesPositions,
  getNeighborMinesCount,
  isPositionInMinePositions,
} from './mines';

export type CellPosition = {row: number; column: number};
export type CellPositions = Array<CellPosition>;

export type Cell = CellPosition & {
  id: string;
  isRevealed: boolean;
  hasMine: boolean;
  neighborMinesCount: number;
};

const generateCell = (
  row: CellPosition['row'],
  column: CellPosition['column'],
  hasMine: boolean,
  neighborMinesCount: number,
): Cell => {
  return {
    row,
    column,
    id: `${row}-${column}`,
    isRevealed: false,
    hasMine,
    neighborMinesCount,
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
      const neighborMinesCount = getNeighborMinesCount(row, column, minesPositions);

      return generateCell(row, column, hasMine, neighborMinesCount);
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

export const getNeighborCellPositions = (
  row: CellPosition['row'],
  column: CellPosition['column'],
): CellPositions => {
  return [
    {row: row - 1, column: column - 1},
    {row: row - 1, column: column},
    {row: row - 1, column: column + 1},
    {row: row, column: column - 1},
    {row: row, column: column + 1},
    {row: row + 1, column: column - 1},
    {row: row + 1, column: column},
    {row: row + 1, column: column + 1},
  ].filter((position) => {
    return position.row >= 0 && position.column >= 0;
  });
};

export const revealCell = (cellId: Cell['id'], cellMap: CellMap) => {
  return cellMap.map((cellRow) => {
    return cellRow.map((cell) => {
      if (cell.id === cellId) {
        return {
          ...cell,
          isRevealed: true,
        };
      }

      return cell;
    });
  });
};
