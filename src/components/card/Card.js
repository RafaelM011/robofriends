import React, { Component} from 'react';
import './Card.css'

class Card extends Component{
    constructor({id, name, email}){
        super();
        this.id = id;
        this.name = name;
        this.email = email;        
    }
    render(){
        return(
            <div className='card'>
                <img 
                    src={`https://robohash.org/${this.id}`} 
                    alt='img'
                />
                <h2> {this.name} </h2>
                <p> {this.email} </p>
            </div>
        );
    }
}

export default Card;