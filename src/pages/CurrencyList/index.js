import React, { useState, useEffect } from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';
import { Separator } from '../../components/Component/styles';
import ListItem from '../../components/ListItem/index';
import currencies from '../../data/currencies';
import details from '../../data/currenciesDetails';
import { useSelector, useDispatch } from 'react-redux';
import { Types as MainTypes } from '../../store/ducks/Main';


const CurrencyList = ({ navigation }) => {
  const theme = useSelector(state => state.Themes);
  const { primaryColor } = theme;

  const [selected, setSelected] = useState('');

  const handlePress = (currency) => {
    const { type } = navigation.state.params;
    if (type == 'base') {
      dispatch({ type: MainTypes.CHANGE_BASE_CURRENCY, payload: currency });
    } else {
      dispatch({ type: MainTypes.CHANGE_QUOTE_CURRENCY, payload: currency });
    }
    navigation.goBack(null);
  }

  const data = useSelector(state => state.Main);
  const dispatch = useDispatch();

  useEffect(() => {
    const { currency } = navigation.state.params;
    setSelected(currency);
    console.log(selected);
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={details}
        keyExtractor={item => item.currencyCode}
        renderItem={({ item }) => {
          return (<ListItem
            selected={selected == item.currencyCode}
            text={item.currencyCode}
            secondaryText={item.currencyName}
            onPress={() => handlePress(item.currencyCode)}
            iconBackground={primaryColor}
          />)
        }}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  )
};

export default CurrencyList;
