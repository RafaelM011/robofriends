import React, {Component} from 'react';
import {robots} from './robots';
import Search from '../components/search/Search';
import CardList from '../components/cardList/CardList';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    searchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    
    render(){
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return(
            <div className='App'>
                <Search searchChange={this.searchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;