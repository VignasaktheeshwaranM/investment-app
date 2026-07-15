import React from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Stack, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function App() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Top Navigation Bar */}
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <TrendingUpIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alpha Investment Manager
          </Typography>
        </Toolbar>
      </AppBar>
      
      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Stack handles responsive layout: column on mobile (xs), row on larger screens (sm) */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          
          <Card sx={{ flex: 1, boxShadow: 3 }}>
            <CardContent>
              <Typography color="text.secondary" gutterBottom sx={{ fontWeight: 'medium' }}>
                Total Portfolio Value
              </Typography>
              <Typography variant="h4" component="div" color="primary.main">
                $124,500.00
              </Typography>
              <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                +2.4% Today
              </Typography>
            </CardContent>
          </Card>
          
          <Card sx={{ flex: 1, boxShadow: 3 }}>
            <CardContent>
              <Typography color="text.secondary" gutterBottom sx={{ fontWeight: 'medium' }}>
                Active Assets
              </Typography>
              <Typography variant="h4" component="div">
                12
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Across 3 asset classes
              </Typography>
            </CardContent>
          </Card>

        </Stack>
      </Container>
    </Box>
  );
}

export default App;