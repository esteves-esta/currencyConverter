import React from 'react';
import { Text } from './styles';
import moment from 'moment';

const ConversionText = ({ base, quote, conversionRate, date }) => {
  return (
    <Text>
      1 {base} = {conversionRate} {quote} do dia {moment(date).format('D MMMM YYYY')}
    </Text>
  )
}

export default ConversionText;