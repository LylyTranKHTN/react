import React, { Component } from "react";

class AddUser extends React.Component{
      constructor(props) {
            super(props);
            this.state = {username: ''};
      }
      
      render() {
            <div>
                  <p>User come: </p>
                  <input type='text' name='username' value={this.state.username}></input>
                  <button></button>
            </div>
      }

}