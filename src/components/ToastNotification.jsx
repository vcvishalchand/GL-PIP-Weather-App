import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ToastNotification = ({ data, handleClose }) => {

  const { msg, open } = data;

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => handleClose()}
          severity="success"
        >
          {msg?.response?.status === 404 ? "Please Enter Correct City Name" : msg?.message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ToastNotification;
