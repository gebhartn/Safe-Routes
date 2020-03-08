import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  display: flex;
  width: 45%;
`;

export const Button = styled(Link)`
  width: 25%;
`;
