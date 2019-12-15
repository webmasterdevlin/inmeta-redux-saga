import {put, takeEvery, call, fork} from 'redux-saga/effect';
import { all } from '@redux-saga/core/effects'
import {
    postHero, 
    getHeroes, 
    deleteHeroById, 
    putHero, 
    getHeroById
} from './hero-service';
import {
    FETCH_HEROES_REQUEST,
    FETCH_HEROES_SUCCESS,
    FETCH_HEROES_FAIL,
} from './hero-actions';

/* function generator implementations of Saga */
// function generator is an ES5 asynchronous programming
function* fetchingHeroes() {
    // thunk version: dispatch FETCH_HEROES_REQUEST
    try {
        const {data} = yield call(getHeroes); // Saga: Passing a reference only
        yield put({type: FETCH_HEROES_SUCCESS, payload: data})
    } catch (e) {
        yield put({type: FETCH_HEROES_FAIL})
    }
}

/* Saga watches the actions of hero-actions */
function* watchFetchingHeroes() {
    yield takeEvery(FETCH_HEROES_REQUEST, fetchingHeroes)
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* heroSaga() {
    yield all([watchFetchingHeroes()])
}
