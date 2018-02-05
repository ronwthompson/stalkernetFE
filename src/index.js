import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const redPalette = {
    50: '#f7e5e6',
    100: '#ecbec0',
    200: '#e09396',
    300: '#d3686c',
    400: '#c9474d',
    500: '#c0272d',
    600: '#ba2328',
    700: '#b21d22',
    800: '#aa171c',
    900: '#9c0e11',
    A100: '#ffcbcc',
    A200: '#ff989a',
    A400: '#ff6567',
    A700: '#ff4c4e',
    'contrastDefaultColor': 'light',
}

const theme = createMuiTheme({
  palette: {
    primary: redPalette,
    type: 'dark',
  },
})


const View = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<View />, document.getElementById('root'));
registerServiceWorker();
