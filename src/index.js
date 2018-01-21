import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme()

const View = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<View />, document.getElementById('root'));
registerServiceWorker();
