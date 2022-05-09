import React, {Component} from 'react';
import './Search.css'

class Search extends Component {
    constructor({searchChange}){
        super()
        this.searchChange = searchChange;
    }
    
    render(){   
        return(
            <div className='search'>
                <h1> ROBOFRIENDS </h1>
                <input type='search' placeholder='Search Robot' onChange={this.searchChange}/>
            </div>
        )
    }
}

export default Search;