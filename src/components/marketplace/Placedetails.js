import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';

export default function PlaceDetails({ shop }) {
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={shop.Picture}
        title={shop.Name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {shop.Name}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" color="textSecondary">
            <strong>Owner:</strong> {shop.Owner}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon style={{ marginRight: 4 }} /> {shop.Phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/marketplace" style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary">
            BUY NOW
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
