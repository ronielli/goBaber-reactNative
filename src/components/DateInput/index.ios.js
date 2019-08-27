import React, {useState, useMemo} from 'react';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {DatePickerIOS} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, DateButton, DataText, Picker} from './styles';

export default function DateInput({date, onChange}) {
  const [opened, setOpened] = useState(false);
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMM 'de ' yyyy", {locale: pt}),
    [date],
  );
  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DataText>{dateFormatted}</DataText>
      </DateButton>
      {opened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            mininumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  );
}
