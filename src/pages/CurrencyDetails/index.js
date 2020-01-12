import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Types as MainTypes } from '../../store/ducks/Main';
import List from '../../components/List/index';
import { useSelector } from 'react-redux';
import { Container, Title } from './styles';
import details from '../../data/currenciesDetails';

const CurrencyDetails = () => {

    const data = useSelector(state => state.Main);
    const theme = useSelector(state => state.Themes);
    const { primaryColor } = theme;

    const {
        conversions,
        countriesCurrency,
        amount: basePrice,
        baseCurrency: base,
        quoteCurrency: quote } = data;

    let currency = details.find(item => item.currencyCode == base);
    useEffect(() => {
    }, []);

    return (
        <Container background={primaryColor}>
            <View>
                <Title>{currency.currencyName} ({base}) is used in: </Title>
                <List arrayOfItens={countriesCurrency} />
            </View>
        </Container>
    );
}

export default CurrencyDetails;
