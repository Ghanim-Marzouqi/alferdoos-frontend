import React from 'react';
import { Typography } from '@material-ui/core';

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'كل الحقوق محفوظة لدى مركز الفردوس الأعلى © '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;