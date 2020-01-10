export const Types = {
  SWAP_CURRENCY: 'MAIN/SWAP_CURRENCY',
  CHANGE_CURRENCY_AMOUNT: 'MAIN/CHANGE_CURRENCY_AMOUNT',
  CHANGE_BASE_CURRENCY: 'MAIN/CHANGE_BASE_CURRENCY',
  CHANGE_QUOTE_CURRENCY: 'MAIN/CHANGE_QUOTE_CURRENCY',
};

const INITIAL_STATE = {
  amount: 100,
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  conversions: {
    USD: {
      isFetching: false,
      base: 'USD',
      date: '2019-05-31',
      rates: {
        AUD: 1.3416,
        BGN: 1.743,
        BRL: 3.2515,
        CAD: 1.3464,
        CHF: 0.97104,
        CNY: 6.813,
        CZK: 23.547,
        DKK: 6.6302,
        GBP: 0.77858,
        HKD: 7.7908,
        HRK: 6.6068,
        HUF: 273.77,
        IDR: 13308,
        ILS: 3.5431,
        INR: 64.463,
        JPY: 110.86,
        KRW: 1118.4,
        MXN: 18.765,
        MYR: 4.281,
        NOK: 8.4117,
        NZD: 1.4071,
        PHP: 49.77,
        PLN: 3.7173,
        RON: 4.0687,
        RUB: 56.774,
        SEK: 8.6942,
        SGD: 1.3829,
        THB: 34.07,
        TRY: 3.5366,
        ZAR: 13.133,
        EUR: 0.89119,
      }
    }
  }
};

const setConversion = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  }

  if (state.conversions[action.payload]) {
    conversion = state.conversions[action.payload];
  }

  return {
    ...state.conversions,
    [action.payload]: conversion
  }
}

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_CURRENCY_AMOUNT: {
      return { ...state, amount: action.amount || 100 };
    }
    case Types.SWAP_CURRENCY: {
      return { ...state, baseCurrency: state.quoteCurrency, quoteCurrency: state.baseCurrency }
    }
    case Types.CHANGE_BASE_CURRENCY: {
      return {
        ...state,
        baseCurrency: action.payload,
        conversions: setConversion(state, action)
      }
    }
    case Types.CHANGE_QUOTE_CURRENCY: {
      return {
        ...state,
        quoteCurrency: action.payload,
        conversions: setConversion(state, action)
      }
    }
    default:
      return state;
  }
}

