import {call, put, all, takeLatest} from 'redux-saga/effects';

import {
  actionListCharactersSuccess,
  actionListCharactersFailure,
} from './actions';

import api from '~/services/api';

export function* getCharacters({payload: {apikey, hash, offset, limit}}) {
  try {
    const response = yield call(
      api.get,
      `/characters?ts=1&apikey=${apikey}&hash=${hash}&offset=${offset}&limit=${limit}`,
    );

    yield put(actionListCharactersSuccess(response.data.data));
  } catch (err) {
    yield put(actionListCharactersFailure(err));
  }
}

export function* getCharactersByName({
  payload: {apikey, hash, offset, limit, name},
}) {
  try {
    const response = yield call(
      api.get,
      `/characters?ts=1&apikey=${apikey}&hash=${hash}&offset=${offset}&limit=${limit}&name=${name}`,
    );

    yield put(actionListCharactersSuccess(response.data.data));
  } catch (err) {
    yield put(actionListCharactersFailure(err));
  }
}

export default all([
  takeLatest('@LIST_CHARACTERS/REQUEST', getCharacters),
  takeLatest('@LIST_CHARACTERS_BY_NAME/REQUEST', getCharactersByName),
]);
