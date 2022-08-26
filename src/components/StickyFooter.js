import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { maxHeight } from '@mui/system';


const StickyFooter = () => {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     background: "black",
    //     color: "white",
    //     maxHeight: "23vh"
    //   }}
    // >
    //   <CssBaseline />
    //   <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="sm">
    //     <Grid container spacing={2}>
    //       <Grid item xs={12} md={6}>
            
    //       </Grid>
    //       <Grid item xs={12} md={6}>

    //       </Grid>
    //     </Grid>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Sticky footer
    //     </Typography>
    //     <Typography variant="h5" component="h2" gutterBottom>
    //       {'Pin a footer to the bottom of the viewport.'}
    //       {'The footer will move as the main element of the page grows.'}
    //     </Typography>
    //     <Typography variant="body1">Sticky footer placeholder.</Typography>
    //   </Container>
    //   <hr style={{width: "80%", height: "1px", backgroundColor: "gray", borderColor: "gray"}}/>
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
                <li><a></a></li>
                <li></li>
              </ul>
           </Grid>
         </Grid>
        </Container>
      </div>
    // </Box>
  );
}

export default StickyFooter