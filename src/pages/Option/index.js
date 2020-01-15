import React, { useEffect } from 'react';
import { ScrollView, Linking, Alert } from 'react-native';
import ListItem from '~/components/ListItem/index';
import { Separator } from '~/components/Component/styles';
import { useSelector } from 'react-redux';

const Option = ({ navigation }) => {
  const theme = useSelector(state => state.Themes);
  const { primaryColor } = theme;

  const handleThemesPage = () => {
    navigation.navigate('Themes')
  };

  const handleSitePress = () => {
    Linking.openURL('https://handlebarlabs.com/').catch(() => Alert.alert('error ocurred'));
  };

  return (
    <ScrollView>
      <ListItem
        text={'Themes'}
        onPress={handleThemesPage}
        customIcon={require('~/asset/next.png')}
        iconBackground={primaryColor}
      />

      <Separator />

      <ListItem
        text={'Handlebarlabs.com'}
        onPress={handleSitePress}
        customIcon={require('~/asset/unlink.png')}
        iconBackground={primaryColor}
      />
    </ScrollView>
  );
}

export default Option;
