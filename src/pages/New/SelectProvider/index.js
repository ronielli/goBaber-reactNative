import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

import api from '~/services/api';
import Background from '~/components/Background';
import {Container, ProviderList, Provider, Avatar, Name} from './styles';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('provider');
      setProviders(response.data);
    }
    loadProviders();
  }, []);
  return (
    <Background>
      <Container>
        <ProviderList
          data={providers}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Provider
              onPress={() =>
                navigation.navigate('SelectDataTime', {provider: item})
              }>
              <Avatar
                source={{
                  uri: item.avatar
                    ? item.avatar.url
                    : 'https://api.adorable.io/avatars/49/abott@adorable.png',
                }}
              />
              <Name>{item.nome}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}
SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Selecionar Prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
