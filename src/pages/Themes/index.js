import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem/index';
// import { Container } from './styles';
import { Separator } from '../../components/Component/styles';
import colors from '../../data/colors';

const Themes = () => {
  const handleClick = (text) => {
    console.log(text);
  };


  return (
    <ScrollView>
      <ListItem
        text={'Blue'}
        onPress={() => handleClick(colors.blue)}
        checkmark={false}
        iconBackground={colors.blue}
      />

      <Separator />

      <ListItem
        text={'Orange'}
        onPress={() => handleClick(colors.orange)}
        checkmark={false}
        iconBackground={colors.orange}
      />

      <Separator />
      <ListItem
        text={'Green'}
        onPress={() => handleClick(colors.green)}
        checkmark={false}
        iconBackground={colors.green}
      />

      <Separator />
      <ListItem
        text={'Purple'}
        onPress={() => handleClick(colors.purple)}
        checkmark={false}
        iconBackground={colors.purple}
      />


    </ScrollView>
  );
}

export default Themes;
