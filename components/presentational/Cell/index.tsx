import * as React from 'react';
import styled from 'styled-components';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  isRevealed: boolean;
};

const Cell = ({onClick, children, isRevealed}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClick(e);
  };

  if (isRevealed) {
    return <RevealedCell>{children}</RevealedCell>;
  }

  return <InteractiveCell onClick={handleClick} />;
};

export default Cell;

const size = '30px';

const RevealedCell = styled.div`
  height: ${size};
  width: ${size};
  border: 1px solid rgb(128, 128, 128);
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InteractiveCell = styled.button`
  height: ${size};
  width: ${size};
  text-align: center;
  line-height: ${size};
  font-size: 10px;
  border-radius: 0;
`;
