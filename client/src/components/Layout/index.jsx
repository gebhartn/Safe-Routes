import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Footer from './Footer';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.section`
  flex-grow: 1;
`;

const Layout = ({ children }) => (
  <Container>
    <Content>
      <Navigation />
      {children}
    </Content>
    <Footer />
  </Container>
);
export default Layout;
