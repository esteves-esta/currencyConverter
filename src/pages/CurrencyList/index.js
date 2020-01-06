import React, { useState } from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';
// import { } from './styles';
import ListItem from '../../components/ListItem/index';
import currencies from '../../data/currencies';

const CurrencyList = () => {
  const [selected, setSelected] = useState(false);
  const handlePress = () => {
    setSelected(true);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={currencies}
        keyExtractor={item => item}
        renderItem={({ item }) =>
          <ListItem
            selected={selected}
            text={item}
            onPress={handlePress} />
        }
      />
    </SafeAreaView>
  )
};

export default CurrencyList;
