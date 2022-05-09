import React, {Component} from 'react';
import './AddCard.css'

class AddCard extends Component {
    render(){
        const {addClick} = this.props;
        return(
            <div className='addCard'>
                <button type='button' className='addButton' onClick={addClick}>+</button>
            </div>
        )
    }
}

export default AddCard;