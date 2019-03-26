import React, { Component } from 'react';

class AddUser extends Component{
  state = {
  	usernameError: false
  }
  
  	handleSubmit = (e) => {
    	e.preventDefault()
      	let newUser = {}
        const inputs = document.getElementsByTagName("input");
      	for(let i = 0; i < inputs.length; i++){
          	newUser[inputs[i].name] = inputs[i].value
        }
      	newUser.games = 0;
        console.log(newUser)
        const result = this.props.users.filter((user) => (
        	user.userName === newUser.userName
        ))
        console.log(result.length)
        if(result.length > 0){
          	this.setState(() => ({
      			usernameError: true
    		}))
        	
        }else{
        	this.props.addUser(newUser)
          	this.setState(() => ({
      			usernameError: false
    		}))
          	this.props.hideForm()
        }
    }
  
	getUsernameError = () => {
      	if(this.state.usernameError){
          return (
           <span id="usernameError" className="usernaneError">Username taken, enter unique username</span>
            )
        }
    }
    getForm = (flag, hideForm) => {
     
      if(flag){
      	return (
          	<form onSubmit={this.handleSubmit}>
  				<p>
    				<label>First name</label>
    				<input type="text" name="firstName" required />
  				</p>
  				<p>
    				<label>Last name</label>
    				<input type="text" name="lastName" required />
  				</p>
  				<p>
    				<label>Username</label>
    				<input type="username" name="userName" required/>< br/>
                    {this.getUsernameError()}
  				</p>
          		<button className="button">Add User</button>
  				<button className="button" onClick={hideForm}>Close Form</button>
			</form> 
        )
      }else{
       	return  null
       }
    }
	render(){
      
      return(
      <div className="form-container">
      	{this.getForm(this.props.showForm, this.props.hideForm)}
      </div>
      )
    }
}

export default  AddUser