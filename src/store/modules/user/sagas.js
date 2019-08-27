import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '~/services/api';
import {updateProfileSuccess, updateProfileFailude} from './actions';

export function* updateProfile({payload}) {
  try {
    const {nome, email, ...rest} = payload.data;
    const profile = {
      nome,
      email,

      ...(rest.oldPassword ? rest : {}),
    };
    const response = yield call(api.put, '/update', profile);
    console.tron.log(response);

    Alert.alert('Sucess', 'Perfil Atualizado com Sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro', 'Erro ao Atulizar os Dados');
    yield put(updateProfileFailude());
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
