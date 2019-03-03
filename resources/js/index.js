import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import MainApp from './container/main/App';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <MainApp/>
      </Fragment>
    )
  }
}

if(document.getElementById('root'))
{
    const element = document.getElementById('root');

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(
    <Provider store={store}>
        <App {...props}/>
    </Provider>
    , element );
}
