import React, {Component} from 'react';
import './App.css';
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            games: [],
            hasFetched: false,
            loginForm: false,
        }
    }

    registerUser(user) {
        fetch('http://localhost:9999/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors) {
                data.errors.forEach(e => {
                    console.log(e);
                });
            }else {
                //Add new user to system
                localStorage.setItem('username', data.username)
                localStorage.setItem('userId', data.userId);
                this.setState({
                    user: data.username
                })
            }
        });
    }

    loginUser(user) {
        fetch('http://localhost:9999/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors) {
                data.errors.forEach(e => {
                    console.log(e);
                });
            }else {
                //Add new user to system
                localStorage.setItem('username', data.username)
                localStorage.setItem('userId', data.userId);
                this.setState({
                    user: data.username
                })
            }
        });
    }

    logout(event) {
        event.preventDefault();
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        this.setState({
            user: null
        });
    }

    componentWillMount() {
        // TODO: check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)
        const localUsername = localStorage.getItem('username');
        if(localUsername) {
            this.setState({
                user: localUsername
            })
        }
       // TODO: fetch all the games
       this.fetchGames();
    }

    createGame(data) {
        fetch('http://localhost:9999/feed/game/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors) {
                data.errors.forEach(e => {
                    console.log(e);
                });
            }else {
                //Add new user to system
                this.fetchGames();
            }
        });
        // TODO: create a game using fetch with a post method then fetch all the games and update the state 
    }

    fetchGames() {
        fetch('http://localhost:9999/feed/games')
            .then(response => response.json())
            .then(data => this.setState({
                games: data.games
            }));
    }

    switchForm() {
        // TODO: switch the value of the loginForm property
        this.setState({
            loginForm: !this.state.loginForm
        })
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user}
                    logout={this.logout.bind(this)}
                    switchForm={this.switchForm.bind(this)}
                    loginForm={this.state.loginForm}
                />
                <AppContent
                    registerUser={this.registerUser.bind(this)}
                    loginUser={this.loginUser.bind(this)}
                    games={this.state.games}
                    createGame={this.createGame.bind(this)}
                    user={this.state.user}
                    loginForm={this.state.loginForm}
                />
                <AppFooter/>
            </main>
        )
    }
}

export default App;


