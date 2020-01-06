import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Container, Title } from './styles';
import TextInputBtn from '../../components/TextInputBtn/index';
import SimpleButton from '../../components/SimpleButton/index';
import ConversionText from '../../components/ConversionText/index';
import Header from '../../components/Header/index';

const Main = ({ }) => {
  const TEMP_BASE_CURRENCY = 'USD';
  const TEMP_QUOTE_CURRENCY = 'GBP';
  const TEMP_BASE_PRICE = '100';
  const TEMP_QUOTE_PRICE = '79.74';
  const TEMP_CONVERSION_RATE = 0.7974;
  const TEMP_CONVERSION_DATE = new Date();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header onPress={() => { }} />

        <Title>Currency Converter</Title>
        <KeyboardAvoidingView>
          <TextInputBtn
            onPress={() => { }}
            buttonText={TEMP_BASE_CURRENCY}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
          />

          <TextInputBtn
            onPress={() => { }}
            buttonText={TEMP_QUOTE_CURRENCY}
            defaultValue={TEMP_QUOTE_PRICE}
            editable={false}
          />
        </KeyboardAvoidingView>

        <ConversionText
          date={TEMP_CONVERSION_DATE}
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          conversionRate={TEMP_CONVERSION_RATE}
        />

        <SimpleButton
          onPress={() => { }}
          text="Reverse Currencies"
        />


      </Container>
    </TouchableWithoutFeedback>
  )
};

export default Main;

