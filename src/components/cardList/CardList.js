import React, {Component} from 'react';
import AddCard from '../addCard/AddCard'
import Card from '../card/Card';
import './CardList.css'

class CardList extends Component {
    render(){
        const {robots, onDeleteClick, onAddClick} = this.props;
        const cardArray = robots.map((user) => {
            return <Card key={user.id} id={user.id} name={user.name} email={user.email} delClick={onDeleteClick}/>;
        });
        return(
            <div className='robots'>    
                {cardArray}
                <AddCard addClick={onAddClick}/>
            </div>
        )
    }
} 

export default CardList;