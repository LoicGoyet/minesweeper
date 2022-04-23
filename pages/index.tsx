import * as React from 'react';
import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import styled from 'styled-components';
import {Cell, CellMap, generateCellMap, revealCell} from '../model/cell';
import CellMapComp from '../components/presentational/CellMap';
import CellContainer from '../components/container/Cell';

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  initialCellMap,
}) => {
  const [cellMap, setCellMap] = React.useState<CellMap>(initialCellMap);
  const [isMineTriggered, setIsMineTriggered] = React.useState(false);

  const handleMineTrigger = () => {
    setIsMineTriggered(true);
  };

  const handleCellReveal = (cellId: Cell['id']) => {
    setCellMap((cellMap) => revealCell(cellId, cellMap));
  };

  return (
    <Main>
      {isMineTriggered ? 'A mine has been triggered' : null}

      <CellMapComp
        cellMap={cellMap}
        renderCell={(cell) => (
          <CellContainer
            cell={cell}
            onMineTrigger={handleMineTrigger}
            onCellReveal={handleCellReveal}
          />
        )}
      />
    </Main>
  );
};

export default Home;

export const getServerSideProps = () => {
  const rowsLength = 16;
  const columnsLength = 16;
  const initialCellMap = generateCellMap(rowsLength, columnsLength, 40);

  return {
    props: {
      rowsLength,
      columnsLength,
      initialCellMap,
    },
  };
};

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
