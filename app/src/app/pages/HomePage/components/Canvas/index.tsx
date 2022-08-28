import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Canvas = ({ onImageSubmit, onClear }) => {
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
    onClear();
  };

  return (
    <Container style={{ width: '100%', height: '100%' }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ReactSketchCanvas
            ref={canvasRef}
            style={{
              width: '280px',
              height: '280px',
              border: '1px solid rgb(27, 46, 74)',
            }}
            strokeWidth={30}
            strokeColor="black"
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            style={{ width: '100%' }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={6}>
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
