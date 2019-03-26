import React, { Component } from 'react';
import logo from './logo.svg';
import adduser from './person-add.svg';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    	users: [
          {
            firstName: 'Sylvia',
          	lastName: 'Garcia',
          	userName: 'sgarciachavez',
          	games: 0
          },
          {
            firstName: 'Alex',
          	lastName: 'Chavez',
          	userName: 'achavez',
          	games: 0
          }
        ],
    	showForm: false,
    	showGames: true
    }

	addUser = (user) => {
     
      this.setState((currentState) => ({
      	users: currentState.users.concat([user])
      }))
    }
	showForm = () => {
      this.setState(() => ({
      	showForm: true
    	}))
    }
	
	hideForm = () => {
      this.setState(() => ({
      	showForm: false
    }))
    }

	hideGames = () => {
      this.setState(() => ({
      	showGames: false
    }))
    }

	showGames = () => {
      this.setState(() => ({
      	showGames: true
    }))
    }

	renderAddUserButton = () => {     
      if(!this.state.showForm){
      	return (
        <div className="add-user" onClick={this.showForm}>
			<img className="add-contact" src={adduser} alt="Add user icon" />Add user
		</div>
        )
      }
    }

	renderShowGamesButton = () => {
    	if(this.state.showGames){
        	return (
            	 <p><button className="button" onClick={this.hideGames}>Hide number of games played</button></p>
            )
        }else{
          	return(
        	 	<p><button className="button" onClick={this.showGames}>Show number of games played</button></p>
              )
        }
    }
  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<h1>Video Game Title</h1>
    	
    	{this.renderShowGamesButton()}
    	<UserList 
    		users={this.state.users}
			showGames={this.state.showGames}/>
			{this.renderAddUserButton()}
		
		<AddUser 
			showForm={this.state.showForm} 
			hideForm={this.hideForm} 
			addUser={this.addUser}
			users = {this.state.users}/>
      </div>
    );
  }
}

export default App;
