import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {signInSuccess, signFailude} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const respose = yield call(api.post, 'session', {
      email,
      password,
    });
    const {avatar, id, nome, provider, token} = respose.data;

    if (provider) {
      Alert('Erro Login', 'Usuario  é um prestador de serviço');
      return null;
    }
    yield put(signInSuccess(token, {avatar, email, id, nome, provider, token}));
    // history.push('./dashboard');
  } catch (error) {
    Alert('Erro Login', 'Usuario ou senha Invalida');
    yield put(signFailude());
  }
}

export function* signUp({payload}) {
  try {
    const {email, password, name} = payload;

    yield call(api.post, 'users', {
      email,
      password,
      nome: name,
    });

    // history.push('./');
  } catch (error) {
    Alert('Erro Login', 'Falha no cadastro Verifique seus Dados');
    yield put(signFailude());
  }
}
export function setToken({payload}) {
  if (!payload) return;
  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
