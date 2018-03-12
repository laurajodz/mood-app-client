import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import {MuiPickersUtilsProvider} from 'material-ui-pickers';
// import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            {/*}<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                <App />
            {/*}</MuiPickersUtilsProvider>*/}
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
