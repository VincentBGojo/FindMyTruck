/**
 * Import : NPM (Yarn)
 */
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

/**
 * Import : local
 */
import App from 'src/components/App';
import store from 'src/store';

/**
 * REACT element 
 */
const rootReactElement = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);

