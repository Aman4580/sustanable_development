import React from 'react';
import { Grid, CircularProgress, Container } from '@mui/material';
import PlaceDetails from './Placedetails';
import data from '../../api/placeDetails.json'; // Ensure this path is correct
import './List.css'; // Import the CSS file

export default function List() {
  return (
    <Container maxWidth="lg" className="container-max-width">
      {data.length === 0 ? (
        <div className="loading-spinner">
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={3} className="grid-container">
          {data.map((shop, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className="grid-item">
              <PlaceDetails shop={shop} className="card" />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
