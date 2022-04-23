import * as React from 'react';
import styled from 'styled-components';
import {Cell} from '../../../model/cell';
import CellComp from '../../presentational/Cell';

type Props = {
  cell: Cell;
  onCellReveal: (cellId: Cell['id']) => void;
  onMineTrigger: () => void;
};

const Cell = ({cell, onMineTrigger, onCellReveal}: Props) => {
  const handleClick = () => {
    if (!cell.isRevealed) {
      return cell.hasMine ? onMineTrigger() : onCellReveal(cell.id);
    }

    console.log('handleClick');
  };

  return (
    <CellComp onClick={handleClick} isRevealed={cell.isRevealed}>
      {cell.hasMine ? 'x' : cell.neighborMinesCount || null}
    </CellComp>
  );
};

export default Cell;
