import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/componentes/playlist';
import data from '../api.json';

//console.log('Hola Mundo!')
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducer from '../reducers/data';

const initialState = {
    data: {
        ...data,
        search: [],
    }
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enhancer
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')

//ReactDOM.render(que voy a renderizar, dónde lo haré)
//const holaMundo = <h1>Hola Mundo!!!!</h1>;

render(
    <Provider store={store}>
        <Home />
    </Provider> , 
    homeContainer
);