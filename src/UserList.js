import React, { Component } from 'react';


class UserList extends Component{
  displayGames = (flag, user) => {
  	if(flag){
    	return (<span> - {user.games} </span>)
    }
  }
	render(){
      const { users, showGames} = this.props
      return(
        <ol>
        {users.map((user) => (
        	 <li className="list-item" key={user.userName}>
        		{user.userName} {this.displayGames(showGames, user)}
  			</li>
      	))}
       </ol>
      )
    }
}
export default UserList