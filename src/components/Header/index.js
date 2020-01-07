import React from 'react';
import { Button, Container, Icon } from './styles';

const Header = ({ onPress }) => {

  return (
    <Container>
      <Button onPress={onPress}>
        <Icon
          resizeMode="contain"
          source={require('../../asset/gear.png')} />
      </Button>
    </Container >
  )
}

export default Header;