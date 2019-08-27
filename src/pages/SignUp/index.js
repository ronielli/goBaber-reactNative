import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Background from '~/components/Background';
import log from '~/assets/logo.png';
import {signUpRequest} from '~/store/modules/auth/actions';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Sighlink,
  SighlinkText,
} from './styles';

export default function SignIn({navigation}) {
  const loading = useSelector(state => state.ayth.loading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passowordRef = useRef();
  function handleSubmit() {
    console.tron.log(name, email, password);
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <Background>
      <Container>
        <Image source={log} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite Seu Nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite Seu e-mail"
            ref={emailRef}
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
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar Conta
          </SubmitButton>
        </Form>
        <Sighlink onPress={() => navigation.navigate('SignIn')}>
          <SighlinkText>Já Tenho Conta</SighlinkText>
        </Sighlink>
      </Container>
    </Background>
  );
}
