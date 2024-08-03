import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, Button } from '@mui/material';
import dreamJob from '../assets/dream_job.svg';
import exploreOpportunities from '../assets/explore_opportunities.svg';
import joinCommunity from '../assets/join_community.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()

  return (
    <>
      
      <Container>
        <Box mt={4} textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Job Listings
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Your one-stop destination for the latest job opportunities.
          </Typography>
          <Button variant="contained" color="primary" size="large" onClick={()=>{
      navigate("/jobs");

          }}>
            Explore Jobs
          </Button>
        </Box>
        <Box mt={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <img src={dreamJob} alt="Find Your Dream Job" style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6" component="h2" gutterBottom>
                  Find Your Dream Job
                </Typography>
                <Typography>
                  Browse through thousands of job listings and find the perfect one for you.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <img src={exploreOpportunities} alt="Explore New Opportunities" style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6" component="h2" gutterBottom>
                  Explore New Opportunities
                </Typography>
                <Typography>
                  Discover new career paths and industries that suit your skills and interests.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <img src={joinCommunity} alt="Join Our Community" style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6" component="h2" gutterBottom>
                  Join Our Community
                </Typography>
                <Typography>
                  Connect with professionals and get tips and advice on how to land your next job.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
