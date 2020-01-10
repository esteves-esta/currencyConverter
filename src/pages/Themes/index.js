import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem/index';
import { Types as ThemesTypes } from '../../store/ducks/Themes';
import { useDispatch } from 'react-redux';
import { Separator } from '../../components/Component/styles';
import colors from '../../data/colors';

const Themes = ({ navigation }) => {

  const dispatch = useDispatch();

  const handleClick = (text) => {
    dispatch({ type: ThemesTypes.CHANGE_PRIMARY_COLOR, payload: text });
    navigation.goBack(null);
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
        text={'Black'}
        onPress={() => handleClick(colors.black)}
        checkmark={false}
        iconBackground={colors.black}
      />


    </ScrollView>
  );
}

export default Themes;
