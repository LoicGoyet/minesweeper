import * as React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  isRevealed: boolean;
};

const Cell = ({className, onClick, children, isRevealed}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <Wrapper onClick={handleClick} className={className}>
      {isRevealed ? children : null}
    </Wrapper>
  );
};

export default Cell;

const Wrapper = styled.button`
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 10px;
`;
