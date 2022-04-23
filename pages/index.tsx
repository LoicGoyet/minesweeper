import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import styled from 'styled-components';
import {generateCellMap} from '../model/cell';
import CellMap from '../components/presentational/CellMap';

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  cellMap,
  rowsLength,
  columnsLength,
}) => {
  return (
    <Main>
      <CellMap
        cellMap={cellMap}
        rowsLength={rowsLength}
        columnsLength={columnsLength}
      />
    </Main>
  );
};

export default Home;

export const getServerSideProps = () => {
  const rowsLength = 16;
  const columnsLength = 16;
  const cellMap = generateCellMap(rowsLength, columnsLength, 40);

  return {
    props: {
      rowsLength,
      columnsLength,
      cellMap,
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
