import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import Background from '~/components/Background';
import log from '~/assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Sighlink,
  SighlinkText,
} from './styles';
import {signInRequest} from '~/store/modules/auth/actions';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const passowordRef = useRef();
  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }
  return (
    <Background>
      <Container>
        <Image source={log} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite ser e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passowordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite ser e-mail"
            ref={passowordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
        <Sighlink onPress={() => navigation.navigate('SignUp')}>
          <SighlinkText>Crir conta Gratuita</SighlinkText>
        </Sighlink>
      </Container>
    </Background>
  );
}
