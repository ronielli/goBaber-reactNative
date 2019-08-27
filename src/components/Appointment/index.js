import React, {useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Left, Avatar, Info, Name, Time} from './styles';

export default function Appointment({data, onCancel}) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.data), new Date(), {
      locale: pt,
      addSuffix: false,
    });
  });
  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : 'https://api.adorable.io/avatars/49/abott@adorable.png',
          }}
        />
        <Info>
          <Name>{data.provider.nome}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {data.canceleble && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
