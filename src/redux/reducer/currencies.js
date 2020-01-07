import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT } from '../action/currencies';

const INITIAL_STATION = {};

const reducer = (state = INITIAL_STATION, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:

      return { ...state, amount: action.amount || 0 };
    case SWAP_CURRENCY:
      return { ...state, baseCurrency: state.quoteCurrency, quoteCurrency: state.baseCurrency }
    default:
      return state;
  }
}
