import React from "react"
import {Link} from "react-dom"

class PokemonIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <li className="pokemon-index-item">
                <span>{this.props.pokemon.id + " "}</span>
                <img src={this.props.pokemon.imageUrl} ></img>
                <span> {this.props.pokemon.name} </span>
            </li>
        )        
    }
}

export default PokemonIndexItem;