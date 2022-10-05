import styled from 'styled-components';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <Main>
      <Navbar />
      <div>{children}</div>
    </Main>
  );
};

const Main = styled.main`
  margin: 0 auto;
  max-width: 52rem;
  width: 100%;
`
