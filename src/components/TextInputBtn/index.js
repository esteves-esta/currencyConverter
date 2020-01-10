import React from 'react';
// import {  } from 'react-native';
import { Container, Button, Input, Text, Border } from './styles';

const TextInputBtn = (props) => {
  const { onPress, buttonText, editable = true, color } = props;
  return (
    <Container>
      <Button
        onPress={onPress}
        underlayColor={color}
      >
        <Text color={color}>{buttonText}</Text>
      </Button>
      <Border color={color} />
      <Input
        underlineColorAndroid='transparent'
        disabled={!editable}
        color={color}
        {...props}
      />
    </Container>
  )
}

export default TextInputBtn;