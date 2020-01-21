import React from 'react';
import { Control, Errors } from 'react-redux-form';
import { Label } from 'reactstrap';
import { Tooltip } from 'react-mdl';

export default props => (
  <div className="row">
    <div className="col-12">
      <Tooltip label={props.tooltip ? props.tooltip : ''}>
        <Label htmlFor={props.id} className="label">
          {props.label}
        </Label>
      </Tooltip>
    </div>
    <div className="col-12">
      <Control.text
        className="form-control"
        model={props.model}
        id={props.id}
        name={props.id}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  </div>
);
