import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt-BR';
import MaskedTextInput from 'react-text-mask';

export default props => {
  registerLocale('pt-br', pt);

  return (
    <DatePicker
      selected={props.value}
      locale="pt-br"
      dateFormat="dd/MM/yyyy"
      placeholderText={props.placeholder}
      {...props}
      customInput={
        <MaskedTextInput
          type="text"
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
        />
      }
    />
  );
};
