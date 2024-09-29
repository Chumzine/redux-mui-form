import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    typography: {
      h4: {
        fontSize: '2rem',
        fontStyle: 'bold',
      },
      body1: {
        fontSize: '1rem',
      },
    },  
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              '&:hover': {
                  backgroundColor: '#848486',
                },  
              fontWeight: 'bold', 
              fontSize: '1.2rem', 
              textTransform: 'none',
              backgroundColor: '#fafafa',
              color: '#363638',
              borderRadius: '0.5rem',
              lineHeight: '2.5rem'
            },
          },
        },
        MuiFormLabel: {
          styleOverrides: {
            root: {
              fontSize: '1.2rem',
              color: '#f4f4f4',
            },
          },
        },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#f4f4f4',
                },
                borderRadius: '0.5rem',
                color: '#848486',
              },
              input: {
                color: '#f4f4f4', 
              },
              notchedOutline: {
                borderColor: '#848486',
              },
            },
          },
    },
});



