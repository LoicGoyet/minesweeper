import * as React from 'react';
import styled from 'styled-components';
import {CellMap, Cell} from '../../../model/cell';

type Props = {
  className?: string;
  cellMap: CellMap;
  renderCell: (cell: Cell) => JSX.Element;
};

const CellMap = ({className, cellMap, renderCell}: Props) => {
  return (
    <Wrapper className={className}>
      <tbody>
        {cellMap.map((cellRow, index) => {
          return (
            <tr key={index}>
              {cellRow.map((cell) => {
                return <Cell key={cell.id}>{renderCell(cell)}</Cell>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Wrapper>
  );
};

export default CellMap;

const Wrapper = styled.table`
  border-collapse: collapse;
`;

const Cell = styled.td`
  font-size: 0;
  padding: 0;
`;
