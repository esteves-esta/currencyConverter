import React, { useEffect, useState } from 'react';
import { Text, TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView, Animated } from 'react-native';
import { Container, Title } from './styles';
import TextInputBtn from '../../components/TextInputBtn/index';
import SimpleButton from '../../components/SimpleButton/index';
import ConversionText from '../../components/ConversionText/index';
import Header from '../../components/Header/index';

const Main = ({ }) => {

  const [sizeAnimated] = useState(new Animated.Value(50));
  const ANIMATION_DURATION = 250;

  useEffect(() => {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    Keyboard.addListener(`keyboard${name}Show`, keyboardShow);
    Keyboard.addListener(`keyboard${name}Hide`, keyboardHide);
  }, []);

  function keyboardShow() {
    // console.log('asdf');
    Animated.timing(sizeAnimated, {
      toValue: 20,
      duration: ANIMATION_DURATION,
    }).start();

  }

  function keyboardHide() {
    // console.log('hide');
    Animated.timing(sizeAnimated, {
      toValue: 50,
      duration: ANIMATION_DURATION,
    }).start();

  }

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

        <Animated.Text style={{ fontSize: sizeAnimated, color: '#fff' }}>Teste</Animated.Text>
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

