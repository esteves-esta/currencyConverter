import React from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import ListItem from '../../components/ListItem/index';
import { Types as ThemesTypes } from '../../store/ducks/Themes';
import { useDispatch } from 'react-redux';
import { Separator } from '../../components/Component/styles';
import colors from '../../data/colors';

const Themes = ({ navigation }) => {

  const dispatch = useDispatch();

  const handleClick = (color) => {
    dispatch({ type: ThemesTypes.CHANGE_PRIMARY_COLOR, payload: color });
    AsyncStorage.setItem("@teste:choose_color", color);
    navigation.goBack(null);
  };


  return (
    <ScrollView>
      <ListItem
        color={'Blue'}
        onPress={() => handleClick(colors.blue)}
        checkmark={false}
        iconBackground={colors.blue}
      />

      <Separator />

      <ListItem
        color={'Orange'}
        onPress={() => handleClick(colors.orange)}
        checkmark={false}
        iconBackground={colors.orange}
      />

      <Separator />
      <ListItem
        color={'Green'}
        onPress={() => handleClick(colors.green)}
        checkmark={false}
        iconBackground={colors.green}
      />

      <Separator />
      <ListItem
        color={'Black'}
        onPress={() => handleClick(colors.black)}
        checkmark={false}
        iconBackground={colors.black}
      />


    </ScrollView>
  );
}

export default Themes;
