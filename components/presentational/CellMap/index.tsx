import * as React from 'react';
import styled from 'styled-components';
import {CellMap, mapCellMap} from '../../../model/cell';

type Props = {
  className?: string;
  cellMap: CellMap;
  rowsLength: number;
  columnsLength: number;
};

const CellMap = ({className, cellMap, rowsLength, columnsLength}: Props) => {
  return (
    <Wrapper className={className}>
      <tbody>
        {cellMap.map((cellRow, index) => {
          return (
            <tr key={index}>
              {cellRow.map((cell) => {
                return <Cell key={cell.id}>{cell.hasMine ? 'x' : 0}</Cell>;
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
  border: 1px solid;
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 10px;
`;
