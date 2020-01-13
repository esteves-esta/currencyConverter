import { call, put, select } from 'redux-saga/effects';
import { Types as MainTypes } from '../../ducks/Main/index';

// api documentation
// https://www.frankfurter.app/docs/
// https://api.frankfurter.app/latest?amout=10&from=BRL&to=USD

const getLastestRate = currency =>
  fetch(`https://api.frankfurter.app/latest?from=${currency}`);


export function* fetchLastestConversionRates(action) {
  try {
    let currency = action.payload;
    if (currency === undefined) {
      currency = yield select(state => state.Main.baseCurrency);
    }

    console.log('saga main action', action);

    // const response = yield getLastestRate('USD');
    // faz chamada a api e pega resposta e tranforma em json
    const response = yield call(getLastestRate, currency);
    const result = yield response.json();

    // manda resultado para os tipos corretos
    if (result.error) {
      yield put({
        type: MainTypes.CONVERSION_ERROR,
        error: result.error
      });
    } else {
      yield put({
        type: MainTypes.CONVERSION_RESULT,
        result: result
      });
    }

  } catch (error) {

    console.log('Saga error', error);

    yield put({
      type: MainTypes.CONVERSION_ERROR,
      error: error.message
    });
  }
}
