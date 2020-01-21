import React from 'react';
import { Control, Errors } from 'react-redux-form';
import { Label } from 'reactstrap';

export default props => (
  <div className="row">
    <div className="col-12">
      <Label htmlFor={props.id} className="label">
        {props.label}
      </Label>
    </div>
    <div className="col-12">
      <Control
        model={props.model}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        component={props.component}
        className="form-control"
      />
    </div>
  </div>
);