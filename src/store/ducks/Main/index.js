export const Types = {
  SWAP_CURRENCY: 'MAIN/SWAP_CURRENCY',
  CHANGE_CURRENCY_AMOUNT: 'MAIN/CHANGE_CURRENCY_AMOUNT',
};

const INITIAL_STATE = {
  amount: 0
};

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SWAP_CURRENCY: {
      return { ...state, amount: action.amount || 0 };
    }
    case Types.CHANGE_CURRENCY_AMOUNT: {
      return { ...state, baseCurrency: state.quoteCurrency, quoteCurrency: state.baseCurrency }
    }
    default:
      return state;
  }
}

