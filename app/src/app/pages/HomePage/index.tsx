import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Card, CardContent, Container, Grid } from '@mui/material';
import Canvas from './components/Canvas';
import { useHomeSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectHome } from './slice/selectors';
import PredictionCard from './components/PredictionCard';

export function HomePage() {
  const {
    actions: { predictImage, clearState },
  } = useHomeSlice();
  const dispatch = useDispatch();
  const { predictionResult } = useSelector(selectHome);

  return (
    <>
      <Helmet>
        <title>Drawing form</title>
        <meta name="description" content="HCR App drawing form" />
      </Helmet>

      <Container style={{ paddingTop: 60 }} maxWidth="sm">
        <Card
          style={{
            minHeight: 600,
            backgroundColor: 'rgb(8, 29, 58)',
            color: 'rgb(245, 246, 249)',
            border: '1px solid rgb(27, 46, 74)',
          }}
          variant="elevation"
        >
          <CardContent>
            <Box height="25px" />
            <Grid container spacing={1} height="400px">
              <Grid item xs={12}>
                <Canvas
                  onImageSubmit={imageData => dispatch(predictImage(imageData))}
                  onClear={() => dispatch(clearState())}
                />
              </Grid>
              <Grid item xs={12}>
                {predictionResult && (
                  <PredictionCard predictionResult={predictionResult} />
                )}
              </Grid>
            </Grid>
            <Box height="100px" />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
