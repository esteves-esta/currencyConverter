import React from 'react';
import { ScrollView, Linking, Alert } from 'react-native';
import ListItem from '../../components/ListItem/index';
import { Separator } from '../../components/Component/styles';

const Option = ({ navigation }) => {
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
        customIcon={require('../../asset/next.png')}
      />

      <Separator />

      <ListItem
        text={'Handlebarlabs.com'}
        onPress={handleSitePress}
        customIcon={require('../../asset/unlink.png')}
      />
    </ScrollView>
  );
}

export default Option;
