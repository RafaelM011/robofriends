import React, {Component} from 'react';
import Card from '../card/Card';
import './CardList.css'

class CardList extends Component {
    render(){
        const {robots} = this.props;
        const cardArray = robots.map((user) => {
            return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>;
        });
        return(
            <div className='robots'>    
               {cardArray}
            </div>
        )
    }
} 

export default CardList;