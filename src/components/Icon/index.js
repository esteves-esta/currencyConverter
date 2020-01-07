import React from 'react';
import { Container, IconImage } from './styles';

const Icon = ({ checkmark, visible, customIcon, iconBackground }) => {
  const iconsource = customIcon ? customIcon : require('../../asset/check.png');

  return (
    <Container
      visible={visible}
      iconBackground={iconBackground}>
      {checkmark ?
        <IconImage
          resizeMode="contain"
          source={iconsource} />
        : null}
    </Container>
  );
}

export default Icon;


