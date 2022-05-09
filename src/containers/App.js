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
    
    clickAddButton = () => {
        document.querySelector('.registerRobot').toggleAttribute('hidden');
        document.querySelector('.addCard').toggleAttribute('hidden');
    }

    registerRobot = (event) => {
        let name = document.querySelector('.inputName').value;
        let email = document.querySelector('.inputEmail').value;
        console.log(event);
        if ((email.includes("@") && name !== '') && (email.includes('.com') || email.includes('.net') || email.includes('.es')) && event.key === "Enter"){
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
            document.querySelector('.inputName').value = '';
            document.querySelector('.inputEmail').value = '';
            document.querySelector('.registerRobot').toggleAttribute('hidden');
            document.querySelector('.addCard').toggleAttribute('hidden');
        }else{
            if (event.key === 'Enter' || event.target.className === "newButton"){
                if (name === ''){
                    alert('Please fill the name field')
                }else {
                    alert(' The email must have an "@" and a ".com/.net/.es" terminal')
                }
            }  
        }
    }

    render(){
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return(
            <div className='App'>
                <Search searchChange={this.searchChange}/>
                <CardList robots={filteredRobots} onDeleteClick={this.clickDeleteButton} onAddClick={this.clickAddButton} registerRobot={this.registerRobot}/>
            </div>
        )
    }
}

export default App;