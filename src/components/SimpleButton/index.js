import React from 'react';
import { Button, Text } from './styles';

const SimpleButton = ({ text, onPress }) => {
  return (
    <Button
      onPress={onPress}
    >
      <Text>{text}</Text>
    </Button>
  )
}

export default SimpleButton;