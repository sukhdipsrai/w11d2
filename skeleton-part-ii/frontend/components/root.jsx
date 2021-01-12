import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import App from "./app"
import {HashRouter} from "react-router-dom"
import PokemonDetail from './pokemon/pokemon_detail';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App/>
      <PokemonDetail/>
    </HashRouter>
  </Provider>
);

export default Root;