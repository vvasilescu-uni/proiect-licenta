import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Card, CardContent, Container, Grid } from '@mui/material';
import Canvas from './components/Canvas';
import { useHomeSlice } from './slice';
import { useDispatch } from 'react-redux';

export function HomePage() {
  const {
    actions: { predictImage },
  } = useHomeSlice();
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Drawing form</title>
        <meta name="description" content="HCR App drawing form" />
      </Helmet>

      <Container style={{ paddingTop: 60 }} maxWidth="md">
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
            <Box height="50px" />
            <Grid container height="400px">
              <Grid item xs={12}>
                <Canvas
                  onImageSubmit={imageData => dispatch(predictImage(imageData))}
                />
              </Grid>
            </Grid>
            <Box height="100px" />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
