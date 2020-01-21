import React from 'react';
import TimePicker from 'react-times';
import 'react-times/css/material/default.css';

const onTimeChange = props => options => {
  const { hour, minute } = options;

  props.onChange({ hour, minute });
};

export default props => {
  const { hour, minute } = props.value;
  return (
    <div className="col-lg-4 col-sm-12">
      <TimePicker
        style={{ elevation: 0 }}
        minuteStep={1}
        onTimeChange={onTimeChange(props)}
        time={hour && minute ? `${hour}:${minute}` : null}
      />
    </div>
  );
};
