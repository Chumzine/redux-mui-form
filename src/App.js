import { Provider } from 'react-redux';
import { store } from './app/store';
import { Box } from '@mui/material';
import { LoginForm } from './app/features/login/Login';

function App() {
  return (
    <Provider store={store}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#09090b',
        }}
      >
        <LoginForm />
      </Box>
    </Provider>
  );
}

export default App;
