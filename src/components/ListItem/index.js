import React from 'react';
import { CustomButton, CustomText, Row, Separartor } from './styles';
import { View } from 'react-native';

export default function ListItem({ text, selected, onPress }) {
  return (
    <CustomButton
      underlayColor="#8dc0d9"
      onPress={onPress}>
      <Row>
        <CustomText>{text}</CustomText>
        {selected ? <CustomText>Selected</CustomText> : null}
      </Row>
    </CustomButton>
  );
}


