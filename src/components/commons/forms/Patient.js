import React from 'react';
import { Form, Control, Errors } from 'react-redux-form';
import DatePicker from '../DatePicker';
import ControlCustom from '../ControlCustom';
import ControlSelect from '../ControlSelect';
import ControlTextInput from '../ControlTextInput';

export default props => (
  <Form model="patient" onSubmit={values => props.onSubmit(values)}>
    <div className="row">
      <div className="col-12">
        <h5>Dados Pessoais</h5>
      </div>
      <div className="col-12">
        <ControlTextInput
          id="name"
          model=".name"
          label="Primeiro nome"
          tooltip="Insira apenas o primeiro nome nesta entrada, o nome do meio e sobrenome devem ser inserido na linha de baixo"
          placeholder="Insira aqui o nome do paciente"
        />
        <ControlTextInput
          id="surname"
          model=".surname"
          label="Sobrenome"
          tooltip="Insira o nome do meio e todo o sobrenome"
          placeholder="Insira aqui o sobrenome do paciente"
        />
        <ControlTextInput
          id="birthDate"
          model=".birth_date"
          label="Data Nascimento"
          placeholder="Dia/mês/ano"
          component={DatePicker}
        />
        <ControlSelect
          model=".genre"
          id="genre"
          label="Sexo"
          options={props.genres}
        />
        <ControlTextInput
          id="register"
          model=".register"
          label="Registro"
          tooltip="Insira o numero do registro do paciente cadastrado no hostpital, caso não o tenha consulte o responsável"
          placeholder="Insira aqui o registro do paciente"
        />
        <ControlTextInput
          id="observation"
          model=".observation"
          label="Observações"
          tooltip="Insira qualquer sobre o estado em que o paciente está, alguma marca, comportamento alterado, ou alguma outra informação"
          placeholder="Insira aqui alguma informação adicional sobre o paciente"
        />
        <ControlTextInput
          id="protocol_number"
          model=".protocol_number"
          label="Numero protocolo"
          tooltip="Insira numero do protocolo"
          placeholder="Insira aqui o numero do protocolo"
        />
      </div>
    </div>

    <div className="row border-div">
      <div className="col-12">
        <h5>Endereço</h5>
      </div>
      <div className="col-12">
        <ControlSelect
          model=".address.state"
          id="state"
          label="Estado"
          options={props.states}
          onChange={props.onChangeState}
        />
        <ControlSelect
          model=".address.city"
          id="city"
          label="Cidade"
          options={props.cities}
        />
      </div>
    </div>

    <div className="row border-div">
      <div className="col-12">
        <h5>Ações</h5>
      </div>
      <div className="col-lg-3 col-sm-12">
        <button type="submit" className="button">
          Salvar
        </button>
      </div>
      <div className="col-lg-3 col-sm-12">
        <Control.reset model="patient" className="button outline">
          Limpar fomulário
        </Control.reset>
      </div>
    </div>
  </Form>
);
