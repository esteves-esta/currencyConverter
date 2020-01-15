import details from '~/data/currenciesDetails';

export const Types = {
  SWAP_CURRENCY: 'MAIN/SWAP_CURRENCY',
  CHANGE_CURRENCY_AMOUNT: 'MAIN/CHANGE_CURRENCY_AMOUNT',
  CHANGE_BASE_CURRENCY: 'MAIN/CHANGE_BASE_CURRENCY',
  CHANGE_QUOTE_CURRENCY: 'MAIN/CHANGE_QUOTE_CURRENCY',
  GET_INITIAL_CONVERSION: 'MAIN/GET_INITIAL_CONVERSION',
  CONVERSION_RESULT: 'MAIN/CONVERSION_RESULT',
  CONVERSION_ERROR: 'MAIN/CONVERSION_ERROR',
};

const getCountries = (currencyCode) => {
  let currency = details.find(item => item.currencyCode == currencyCode);
  return currency.countries;
}

const INITIAL_STATE = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  countriesCurrency: getCountries('USD'),
  amount: 100,
  conversions: {
  },
  error: null
};

const setConversion = (state, currency) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  }

  if (state.conversions[currency]) {
    conversion = state.conversions[currency];
  }

  return {
    ...state.conversions,
    [currency]: conversion
  }
}



export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_CURRENCY_AMOUNT: {
      return { ...state, amount: action.amount || 0 };
    }
    case Types.SWAP_CURRENCY: {
      let countries = getCountries(state.quoteCurrency);

      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
        countriesCurrency: countries,
        conversions: setConversion(state, state.quoteCurrency),
      }
    }
    case Types.CHANGE_BASE_CURRENCY: {
      let countries = getCountries(action.payload);

      return {
        ...state,
        baseCurrency: action.payload,
        conversions: setConversion(state, action.payload),
        countriesCurrency: countries,
      }
    }
    case Types.CHANGE_QUOTE_CURRENCY: {
      console.log(action.payload);
      // let countries = getCountries(action.payload);
      let countries = [];


      return {
        ...state,
        quoteCurrency: action.payload,
        conversions: setConversion(state, action.payload),
        countriesCurrency: countries,
      }
    }
    case Types.GET_INITIAL_CONVERSION: {
      return {
        ...state,
        conversions: setConversion(state, state.baseCurrency),
      };
    }
    case Types.CONVERSION_RESULT: {
      // coloca os dados da api no state
      // [base] : {conversionResult}

      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          }
        }
      };
    }
    case Types.CONVERSION_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
}

