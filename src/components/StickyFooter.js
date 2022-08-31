import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const StickyFooter = () => {
  return (
      <div
        className='pt-3'
        component="footer"
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          minHeight: "18vh",
        }}>
        <Container maxWidth="md">
        <Grid className="pt-2" container spacing={0}>
           <Grid item xs={12} md={6}>
              <h5 className='text-center'>SOCIALS</h5>
              <ul style={{listStyleType: "none"}}>
                <li><a></a></li>
              </ul>
           </Grid>
           <Grid item xs={12} md={6}>
              <h5 className='text-center'>HENRY WEIGAND</h5>
              <ul style={{listStyleType: "none"}}>
                <li>Icons from <a href='https://icons8.com'>icons8</a></li>
                <li></li>
              </ul>
           </Grid>
         </Grid>
        </Container>
      </div>
  );
}

export default StickyFooter