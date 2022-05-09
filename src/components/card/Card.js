import React, { Component} from 'react';
import './Card.css'

class Card extends Component{
    render(){
        const {id, name, email, delClick} = this.props;  
        return(
            <div className='card'>
                <button type='button' className='deleteButton' onClick={delClick} id={id}>X</button>
                <img 
                    src={`https://robohash.org/${id}`} 
                    alt='img'
                />
                <h2> {name} </h2>
                <p> {email} </p>
            </div>
        );
    }
}

export default Card;