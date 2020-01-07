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

  const [quote, setQuote] = useState('GBP');
  const [base, setBase] = useState('USD');
  const [rate, setRate] = useState(0);
  const [basePrice, setBasePrice] = useState('0');
  const [quotePrice, setQuotePrice] = useState('0');
  const [conversionSelector, setConversion] = useState({});
  const [rates, setRates] = useState(0);

  const TEMP_CONVERSION_DATE = new Date();

  const data = useSelector(state => state.Main);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: MainTypes.CHANGE_CURRENCY_AMOUNT });
    data.conversions && conversion();
    data.conversions && setBase(data.baseCurrency);
    data.conversions && setQuote(data.quoteCurrency);

    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    Keyboard.addListener(`keyboard${name}Show`, keyboardShow);
    Keyboard.addListener(`keyboard${name}Hide`, keyboardHide);

    conversion();
  }, []);

  useEffect(() => {
    conversion();
    setBase(data.baseCurrency);
    setQuote(data.quoteCurrency);
  }, [data]);


  function conversion() {

    data.conversions && setConversion(data.conversions[base]);
    data.conversions && setRates(data.conversions[base].rates[quote] || '0');
    setBasePrice(data.amount);

    let quoteText = '...';
    if (!conversionSelector.isFetching) {
      quoteText = (Number(basePrice) * rates).toFixed(2);
    }
    setQuotePrice(quoteText);

    console.log(quotePrice);
  }


  const handleSwap = () => {
    dispatch({ type: MainTypes.SWAP_CURRENCY });

    setBase(data.baseCurrency);
    setQuote(data.quoteCurrency);
  };

  const handleChangeText = (text) => {
    dispatch({ type: MainTypes.CHANGE_CURRENCY_AMOUNT });
    setBasePrice(text);
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
      <Container>
        <Header onPress={() => navigation.navigate('Options')} />

        <Animated.Text style={{ fontSize: sizeAnimated }}>
          <Title>Currency Converter</Title>
        </Animated.Text>
        <KeyboardAvoidingView>
          <TextInputBtn
            onPress={() => navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base', currency: base })}
            buttonText={base}
            defaultValue={data.amount.toString()}
            keyboardType="numeric"
            onChangeText={handleChangeText}
          />

          <TextInputBtn
            onPress={() => navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote', currency: quote })}
            buttonText={quote}
            defaultValue={quotePrice}
            editable={false}
          />
        </KeyboardAvoidingView>

        <ConversionText
          date={TEMP_CONVERSION_DATE}
          base={base}
          quote={quote}
          conversionRate={rates.toString()}
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

