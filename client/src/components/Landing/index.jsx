import React from 'react';

import { Container, Text, Image, Button } from './Landing.styles';

const Landing = () => (
  <Container>
    <Text>
      <h2>Header Text</h2>
      <p>Text here</p>
      <Button>Link goes here</Button>
    </Text>

    <Image>
      <p>image goes here</p>
    </Image>
  </Container>
);

export default Landing;
