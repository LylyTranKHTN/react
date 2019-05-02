import React, {Component} from 'react'

class User extends Component {
      render () {
            return(
            <div>
                  <p>ID: {this.props.user.id} </p>
                  <p>FirstName: {this.props.user.first_name} </p>
                  <p>LastName: {this.props.user.last_name} </p>
                  <p>Avatar: {this.props.user.avatar} </p><br />
            </div>)
      }
}

export default User;