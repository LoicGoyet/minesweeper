import {generateArray} from '../utils/array';

export type Cell = {
  row: number;
  column: number;
  id: string;
  isRevealed: boolean;
};

const generateCell = (row: number, column: number) => {
  return {
    row,
    column,
    id: `${row}-${column}`,
    isRevealed: false,
  };
};

export type CellMap = Array<Array<Cell>>;

export const generateCellMap = (rows: number, columns: number): CellMap => {
  const rowsArr = generateArray(rows);
  const columnsArr = generateArray(columns);

  return rowsArr.map((row) => {
    return columnsArr.map((column) => generateCell(row, column));
  });
};

export const mapCellMap = <F>(cbFn: (cell: Cell) => F, cellMap: CellMap) => {
  return cellMap.map((row) => {
    return row.map((cell) => {
      return cbFn(cell);
    });
  });
};
