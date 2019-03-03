import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';
import HeaderComponent from '../components/Header';
import {connect} from 'react-redux';
import MainContainer from './MainContainer';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <HeaderComponent/> */}
        <MainContainer/>
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
