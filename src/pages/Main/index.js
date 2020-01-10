import React, { useEffect, useState } from 'react';
import { Text, TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView, Animated } from 'react-native';
import { Container, Title } from './styles';
import TextInputBtn from '../../components/TextInputBtn/index';
import SimpleButton from '../../components/SimpleButton/index';
import ConversionText from '../../components/ConversionText/index';
import Header from '../../components/Header/index';
import { useSelector, useDispatch } from 'react-redux';
import { Types as MainTypes } from '../../store/ducks/Main';
// https://learn.handlebarlabs.com/courses/react-native-basics-build-a-currency-converter/lectures/2769046

const Main = ({ navigation }, props) => {
  const [sizeAnimated] = useState(new Animated.Value(30));
  const ANIMATION_DURATION = 250;
  const TEMP_CONVERSION_DATE = new Date();
  const [quotePrice, setQuotePrice] = useState('0');

  const dispatch = useDispatch();
  const data = useSelector(state => state.Main);

  const { conversions, amount: basePrice, baseCurrency: base, quoteCurrency: quote } = data;
  const { rates } = conversions[base];

  const theme = useSelector(state => state.Themes);
  const { primaryColor } = theme;

  useEffect(() => {

    dispatch({ type: MainTypes.CHANGE_CURRENCY_AMOUNT });
    data.conversions && conversion();

    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    Keyboard.addListener(`keyboard${name}Show`, keyboardShow);
    Keyboard.addListener(`keyboard${name}Hide`, keyboardHide);

    conversion();
  }, []);

  useEffect(() => {
    conversion();
  }, [data]);


  function conversion() {
    let quoteText = '...';
    if (!conversions[base].isFetching) {
      quoteText = (Number(basePrice) * rates[quote]).toFixed(2);
    }
    setQuotePrice(quoteText);
  }


  const handleSwap = () => {
    dispatch({ type: MainTypes.SWAP_CURRENCY });
  };

  const handleChangeText = (text) => {
    dispatch({
      type: MainTypes.CHANGE_CURRENCY_AMOUNT,
      amount: text
    });
  };


  function keyboardShow() {
    Animated.timing(sizeAnimated, {
      toValue: 20,
      duration: ANIMATION_DURATION,
    }).start();

  }

  function keyboardHide() {
    Animated.timing(sizeAnimated, {
      toValue: 30,
      duration: ANIMATION_DURATION,
    }).start();
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container background={primaryColor}>
        <Header onPress={() => navigation.navigate('Options')} />

        <Animated.Text style={{ fontSize: sizeAnimated }}>
          <Title>Currency Converter</Title>
        </Animated.Text>
        <KeyboardAvoidingView>
          <TextInputBtn
            onPress={() => navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base', currency: data.base })}
            buttonText={base}
            defaultValue={basePrice.toString()}
            keyboardType="numeric"
            onChangeText={handleChangeText}
            color={primaryColor}
          />

          <TextInputBtn
            onPress={() => navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote', currency: data.quote })}
            buttonText={quote}
            defaultValue={quotePrice}
            editable={false}
            color={primaryColor}
          />
        </KeyboardAvoidingView>

        <ConversionText
          date={TEMP_CONVERSION_DATE}
          base={base}
          quote={quote}
          conversionRate={rates[quote] || '0'}
        />

        <SimpleButton
          onPress={handleSwap}
          text="Reverse Currencies"
        />


      </Container>
    </TouchableWithoutFeedback>
  )
};

export default Main;

