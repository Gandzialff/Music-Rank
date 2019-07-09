import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App/App';
import * as serviceWorker from './Pages/App/serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
