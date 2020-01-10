import React from 'react';
import { CustomButton, CustomText, Row } from './styles';
import Icon from '../../components/Icon/index';

export default function ListItem(
  { text, selected = true, onPress, checkmark = true,
    visible = true, customIcon, iconBackground }) {
  return (
    <CustomButton
      underlayColor="#e2e2e2"
      onPress={onPress}>
      <Row>
        <CustomText>{text}</CustomText>
        {selected ?
          <Icon
            customIcon={customIcon}
            checkmark={checkmark}
            visible={visible}
            iconBackground={iconBackground}
          />
          : null}
      </Row>
    </CustomButton>
  );
}


