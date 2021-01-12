import React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

class PokemonDetail extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        requestSinglePokemon()
    };
    render(){
        return (
            <Route path='/pokemon/'>
                {this.state}
            </Route>
        )
    }
}

export default PokemonDetail;