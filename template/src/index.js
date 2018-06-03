'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import App from './App';

const AppTheme = require('./resources/AppTheme');
const muiTheme = createMuiTheme(AppTheme);

// The Webpack entrance.
ReactDOM.render((
		<MuiThemeProvider theme={muiTheme}>
			<App/>
		</MuiThemeProvider>
	), document.getElementById('root')
);
