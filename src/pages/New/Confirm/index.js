import React, {useMemo} from 'react';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import {Container, Avatar, Name, Time, SubmitButton} from './styles';
import api from '~/services/api';

export default function Confirm({navigation}) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');
  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), {locale: pt}),
    [time],
  );
  async function handleSelectAppointment() {
    await api.post('appointment', {
      provider_id: provider.id,
      data: time,
    });
    navigation.navigate('Dashboard');
  }
  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : 'https://api.adorable.io/avatars/49/abott@adorable.png',
          }}
        />
        <Name>{provider.nome}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton
          onPress={() => {
            handleSelectAppointment();
          }}>
          COnfirmar
        </SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirmação Agendamento',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
