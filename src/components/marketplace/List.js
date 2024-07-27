import React from 'react';
import { Grid, CircularProgress, Container } from '@mui/material';
import PlaceDetails from './Placedetails';
import data from '../../api/placeDetails.json'; // Ensure this path is correct

export default function List() {
  return (
    <Container>
      {data.length === 0 ? (
        <div style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={3} style={{ padding: '25px', height: '75vh', overflow: 'auto' }}>
          {data.map((shop, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PlaceDetails shop={shop} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
