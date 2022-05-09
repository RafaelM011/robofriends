import React, {Component} from 'react';
import {robots} from './robots';
import Search from '../components/search/Search';
import CardList from '../components/cardList/CardList';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        this.setState({robots: robots});
    }

    searchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    clickDeleteButton = (event) => {
        const id = event.target.attributes.id.nodeValue;
        const newArray = this.state.robots.filter(robot => {
            return robot.id !== parseInt(id);
        });
        this.setState({robots: newArray});
    }
    
    clickAddButton = (event) => {
        const name = prompt("What's the name of the new robot?");
        const email = prompt("What's the email of the new robot?");
        const lastIndex = this.state.robots.length - 1;
        const newId = this.state.robots[lastIndex].id + 1;
        const newRobot = {
            id: newId,
            name: name,
            username: name,
            email: email
        };
        const array = this.state.robots;
        array.push(newRobot);
        this.setState({robots: array});
    }

    render(){
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return(
            <div className='App'>
                <Search searchChange={this.searchChange}/>
                <CardList robots={filteredRobots} onDeleteClick={this.clickDeleteButton} onAddClick={this.clickAddButton}/>
            </div>
        )
    }
}

export default App;