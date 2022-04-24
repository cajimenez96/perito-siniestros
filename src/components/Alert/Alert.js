import React from 'react';
import './alert.css';

const Alert = (props) => {
  const { msg, type } = props;

  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      {msg}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
