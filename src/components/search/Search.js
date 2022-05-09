import React, {Component} from 'react';
import './Search.css'

class Search extends Component {
    render(){   
        const {searchChange} = this.props;
        return(
            <div className='search'>
                <h1> ROBOFRIENDS </h1>
                <input type='search' placeholder='Search Robot' onChange={searchChange}/>
            </div>
        )
    }
}

export default Search;