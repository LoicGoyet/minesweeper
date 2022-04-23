import type {NextPage} from 'next';
import styled from 'styled-components';
import {generateCellMap} from '../model/cell';
import CellMap from '../components/presentational/CellMap';

const Home: NextPage = () => {
  const rowsLength = 16;
  const columnsLength = 16;
  const cellMap = generateCellMap(16, 16);

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

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
