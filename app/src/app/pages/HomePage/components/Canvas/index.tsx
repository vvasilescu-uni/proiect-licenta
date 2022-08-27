import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Canvas = ({ onImageSubmit }) => {
  const canvasRef = React.useRef(null as any);

  const handleSubmit = () => {
    canvasRef.current
      .exportImage('png')
      .then(data => {
        onImageSubmit(data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleClear = () => {
    canvasRef.current.clearCanvas();
  };

  return (
    <Container style={{ width: '100%', height: '100%' }}>
      <ReactSketchCanvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid rgb(27, 46, 74)',
        }}
        strokeWidth={20}
        strokeColor="black"
      />
      <Grid container style={{ paddingTop: '7px' }} spacing={1}>
        <Grid item xs={8}>
          <Button
            variant="contained"
            style={{ width: '100%' }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            style={{ width: '100%' }}
            onClick={handleClear}
            color="error"
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Canvas;
