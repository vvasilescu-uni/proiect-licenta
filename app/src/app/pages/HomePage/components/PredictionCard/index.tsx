import { Card, Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const PredictionCard = ({ predictionResult }) => {
  return (
    <Grid container spacing={1} style={{ marginTop: '25px' }}>
      <Grid item xs={6}>
        <Paper
          elevation={2}
          style={{ backgroundColor: 'rgb(40, 82, 149)', paddingLeft: '5px' }}
        >
          <Typography variant="h5">Letter:</Typography>
          <Typography variant="h6">{`"${predictionResult.pred}"`}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={2}
          style={{ backgroundColor: 'rgb(40, 82, 149)', paddingLeft: '5px' }}
        >
          <Typography variant="h5">Confidence:</Typography>
          <Typography variant="h6">{`"${predictionResult.conf}%"`}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PredictionCard;
