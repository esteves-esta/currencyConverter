import { all, takeLatest } from 'redux-saga/effects';
import { Types as MainTypes } from '../ducks/Main/index';
import { getMain } from './Main';



export default function* rootSaga() {
  return yield all(

    [
      takeLatest(MainTypes.SWAP_CURRENCY, getMain),
    ]

  );
}
