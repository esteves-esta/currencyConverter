import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import { Types as MainTypes } from '~/store/ducks/Main';
import { fetchLastestConversionRates } from './Main';

export default function* rootSaga() {
  return yield all(
    [
      // if this type is called it triggers this function
      takeEvery(MainTypes.GET_INITIAL_CONVERSION, fetchLastestConversionRates),
      takeEvery(MainTypes.SWAP_CURRENCY, fetchLastestConversionRates),
      takeEvery(MainTypes.CHANGE_BASE_CURRENCY, fetchLastestConversionRates),
    ]
  );
}
