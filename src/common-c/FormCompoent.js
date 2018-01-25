import React from 'react';

export const Input = ({
    input,
    label,
    type,
    icon,
    meta: { touched, error, warning }
  }) => (
    <div className="row">
      <label className="col-3"><i className={'fa fa-'+icon} ></i> {label} </label>
      <div className="col-9">
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span className="error">{warning}</span>))}
      </div>
    </div>
  )

