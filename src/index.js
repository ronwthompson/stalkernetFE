import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import SearchForm from './SearchForm';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme()

const View = () => (
  <MuiThemeProvider theme={theme}>
    <SearchForm />
  </MuiThemeProvider>
)

ReactDOM.render(<View />, document.getElementById('root'));
registerServiceWorker();
