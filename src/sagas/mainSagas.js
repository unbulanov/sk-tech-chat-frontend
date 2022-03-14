import { all, takeEvery, put, delay, call } from 'redux-saga/effects';
import { mainActions } from '../actions';
import { MainApi } from '../api'

function* mainMessagesList() {
    try {
        const data = yield call(
            MainApi.getMessagesList,
        );
        yield delay(2000); 
        console.log(data)
        yield put(mainActions.mainMessagesListSuccess(data));
    } catch (error) {
        yield put(mainActions.mainMessagesListFailed(error));
        console.log('loading error', error);
    }
}

export function* watchMainMessagesList() {
    yield takeEvery(mainActions.MAIN_MESSAGES_LIST_FETCH, mainMessagesList);
}

export default function* rootSaga() {
    yield all([
        watchMainMessagesList(),
    ]);
}