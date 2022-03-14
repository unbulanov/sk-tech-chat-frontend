import { all } from 'redux-saga/effects';
import mainSagas from './mainSagas';

export default function* rootSaga() {
    yield all([
        mainSagas(),
    ]);
}
