import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {Button, TextField} from 'react-md';
import './loginview.css';

export default class LoginView extends PureComponent {
    constructor({handleLogin}) {
        super();

        this.state = {
            username: ""
        }

        this.handleLogin = handleLogin
    }

    handleNameChange = (username) => {
        this.setState({username})
    };

    handleClick = () => {
        this.handleLogin(this.state.username)
    };

    render() {
        const submitButtonJSX = (this.state.username != "" ?
                <Link to={'/courseSelect'}>
                    <Button className='submit-button' primary raised onClick={this.handleClick}>
                        Submit
                    </Button>
                </Link> : ""
        );

        return (
            <div className='big-container'>
                <p className='leaderboard-list-title'>Login</p>

                <TextField
                    id='name'
                    placeholder='Full Name'
                    inputClassName='login-input-textfield'
                    onChange={this.handleNameChange}
                    autoComplete='off'
                />

                {submitButtonJSX}

            </div>
        );
    }
}
