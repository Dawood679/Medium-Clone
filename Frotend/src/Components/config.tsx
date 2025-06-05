export const BECKEND_URL = "https://week-13.dawoodalam057.workers.dev"


import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // horizontal center
        alignItems: 'center',     // vertical center
        height: '100vh',          // full viewport height
      }}
    >
      <CircularProgress />
    </Box>
  );
}
