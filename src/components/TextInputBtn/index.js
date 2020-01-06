import React from 'react';
// import {  } from 'react-native';
import { Container, Button, Input, Text, Border } from './styles';

const TextInputBtn = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const underlayColor = '#406070';

  return (
    <Container>
      <Button
        onPress={onPress}
        underlayColor={underlayColor}
      >
        <Text>{buttonText}</Text>
      </Button>
      <Border />
      <Input
        underlineColorAndroid='transparent'
        disabled={!editable}
        {...props}
      />
    </Container>
  )
}

export default TextInputBtn;