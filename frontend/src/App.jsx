import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Stack, Box, CircularProgress } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function App() {
  // Set up state to hold our backend data
  const [portfolio, setPortfolio] = useState(null);

  // Fetch data from FastAPI when the app loads
  useEffect(() => {
    fetch('http://localhost:8000/api/portfolio')
      .then(response => response.json())
      .then(data => setPortfolio(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <TrendingUpIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alpha Investment Manager
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* If data hasn't loaded yet, show a loading spinner */}
        {!portfolio ? (
          <CircularProgress />
        ) : (
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            
            <Card sx={{ flex: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography color="text.secondary" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Total Portfolio Value
                </Typography>
                <Typography variant="h4" component="div" color="primary.main">
                  ${portfolio.total_value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  +{portfolio.daily_change_percentage}% Today
                </Typography>
              </CardContent>
            </Card>
            
            <Card sx={{ flex: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography color="text.secondary" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Active Assets
                </Typography>
                <Typography variant="h4" component="div">
                  {portfolio.active_assets}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Across {portfolio.asset_classes} asset classes
                </Typography>
              </CardContent>
            </Card>

          </Stack>
        )}
      </Container>
    </Box>
  );
}

export default App;