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
        <ControlCustom
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
          id="document"
          model=".document"
          tooltip="Insira qualquer documento válido que auxilie na identificação do paciente"
          label="Documento (cpf, rg, carteira de motorista, etc)"
          placeholder="Insira aqui algum documento, pode ser deixado em branco caso não possua"
        />
        <ControlTextInput
          id="observation"
          model=".observation"
          label="Observações"
          tooltip="Insira qualquer sobre o estado em que o paciente está, alguma marca, comportamento alterado, ou alguma outra informação"
          placeholder="Insira aqui alguma informação adicional sobre o paciente"
        />
      </div>
    </div>

    <div className="row border-div">
      <div className="col-12">
        <h5>Informações de contato do paciente ou familiares</h5>
      </div>
      <div className="col-12">
        <ControlTextInput
          id="contact.responsible"
          model=".contact.responsible"
          label="Nome responsável"
          tooltip="Insira o nome de pais, filhos, nestos, ou qualquer outra pessoa que deve ser contactada quando necessário"
          placeholder="Insira aqui o nome do responsável pelo paciente"
        />
        <ControlTextInput
          id="contact.phone"
          model=".contact.phone"
          label="Telefone"
          tooltip="Insira o telefone do responsável, de preverência para um número que com certeza ele ou ela vai atender quando necessário"
          placeholder="Insira aqui algum telefone para entrar em contato com o paciente ou familiares"
        />
        <ControlTextInput
          id="contact.email"
          model=".contact.email"
          label="E-mail"
          tooltip="Insira um email para que qualquer atualização possa ser enviada com facilidade"
          placeholder="Insira aqui algum email para entrar em contato com o paciente ou familiares"
        />
      </div>
    </div>

    <div className="row border-div">
      <div className="col-12">
        <h5>Endereço</h5>
      </div>
      <div className="col-12">
        <ControlSelect
          model="address.state"
          id="state"
          label="Estado"
          options={props.states}
          onChange={props.onChangeState}
        />
        <ControlSelect
          model="address.city"
          id="city"
          label="Cidade"
          options={props.cities}
        />
        <ControlTextInput
          id="address.location"
          model=".address.location"
          label="Bairro"
          tooltip="Insira o bairro onde o paciente ou responsáveis moram"
          placeholder="Insira aqui o bairro"
        />
        <ControlTextInput
          id="address.street"
          model=".address.street"
          label="Rua"
          tooltip="Insira a rua onde o paciente ou responsáveis moram"
          placeholder="Insira aqui a rua"
        />
        <ControlTextInput
          id="address.number"
          model=".address.number"
          label="Numero"
          type="number"
          tooltip="Insira o numero onde o paciente ou responsáveis moram"
          placeholder="Insira aqui a rua Insira o numero"
        />
        <ControlTextInput
          id="address.complement"
          model=".address.complement"
          label="Complemento"
          tooltip="Insira o complemento do endereço onde o paciente ou responsáveis moram (Aparatamento, Anexo, etc)"
          placeholder="Insira aqui o complemento"
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
