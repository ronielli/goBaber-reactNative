import React, {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Title,
  Form,
  FormInput,
  Separetor,
  SubmitButton,
  LogoutButton,
} from './styles';
import Background from '~/components/Background';
import {updateProfileRequest} from '~/store/modules/user/actions';
import {signOut} from '~/store/modules/auth/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const [nome, setNome] = useState(profile.nome);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState('');
  const [oldPpassword, setoldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const oldPassowordRef = useRef();
  const confirmPassowordRef = useRef();
  const passowordRef = useRef();
  useEffect(() => {
    setPassword('');
    setConfirmPassword('');
    setoldPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        nome,
        email,
        password,
        confirmPassword,

        oldPpassword,
      }),
    );
  }
  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite Seu Nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={nome}
            onChangeText={setNome}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite Seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPassowordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separetor />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua Senha Atual"
            ref={oldPassowordRef}
            value={oldPpassword}
            onChangeText={setoldPassword}
            returnKeyType="next"
            onSubmitEditing={() => passowordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova senha"
            ref={passowordRef}
            value={password}
            onChangeText={setPassword}
            returnKeyType="next"
            onSubmitEditing={() => confirmPassowordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            ref={confirmPassowordRef}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Atulizar</SubmitButton>
          <LogoutButton onPress={handleLogout}>Atulizar</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
