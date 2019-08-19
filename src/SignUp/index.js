import React, {useRef} from 'react';
import {Image} from 'react-native';
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

export default function SignIn({navigation}) {
  const emailRef = useRef();
  const passowordRef = useRef();
  function handleSubmit() {
    alert(1);
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
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite ser e-mail"
            ref={passowordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
        <Sighlink onPress={() => navigation.navigate('SignIn')}>
          <SighlinkText>Já Tenho Conta</SighlinkText>
        </Sighlink>
      </Container>
    </Background>
  );
}
