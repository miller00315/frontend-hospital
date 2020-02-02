import React from 'react';
import { Control, Errors } from 'react-redux-form';
import { Label } from 'reactstrap';

const renderOption = item => (
  <option key={item._id} value={item.code}>
    {item.title}
  </option>
);

export default props => (
  <div className="row">
    <div className="col-12">
      <Label htmlFor={props.id} className="label">
        {props.label}
      </Label>
    </div>
    <div className="col-12">
      <Control.select
        model={props.model}
        id={props.id}
        name={props.id}
        className="form-control"
        onChange={props.onChange ? props.onChange : null}
      >
        <option key={0} value="">
          Escolha uma opção
        </option>
        {props.options.map(item => renderOption(item))}
      </Control.select>
    </div>
  </div>
);
