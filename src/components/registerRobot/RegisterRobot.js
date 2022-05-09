import React, {Component} from 'react';
import './RegisterRobot.css';

class RegisterRobot extends Component{
    render(){
        const {register} = this.props;
        return(
            <div className='registerRobot' hidden>
                <form>
                    <button type='button' className='newButton' onClick={register}>+</button><br/>
                    <input type='text' placeholder='Robot Name' className='inputName' onKeyPress={register}/>
                    <input type='email' placeholder='Robot Email' className='inputEmail' onKeyPress={register}/>
                </form>
            </div>
        )
    }
}

export default RegisterRobot;