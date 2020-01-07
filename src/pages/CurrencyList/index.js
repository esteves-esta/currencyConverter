import React, { useState } from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';
import { Separator } from '../../components/Component/styles';
import ListItem from '../../components/ListItem/index';
import currencies from '../../data/currencies';

const CurrencyList = ({ navigation }) => {
  const handlePress = () => {
    navigation.goBack(null);
  }

  const TEMP_CURRENT = 'CAD';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={currencies}
        keyExtractor={item => item}
        renderItem={({ item }) =>
          <ListItem
            selected={TEMP_CURRENT == item}
            text={item}
            onPress={handlePress} />
        }
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  )
};

export default CurrencyList;
