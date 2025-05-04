import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 80vh;
  // padding: 2rem;
  padding-top: 0;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
