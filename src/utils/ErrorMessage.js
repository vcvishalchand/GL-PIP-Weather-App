import React from 'react';
import Typography from '@mui/material/Typography';

const ErrorMessage = ({ message }) => {
  const errorMessageStyle = {
    color: 'red',
    border: '1px solid red',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <Typography variant="body1" style={errorMessageStyle}>
      {message}
    </Typography>
  );
};

export default ErrorMessage;
