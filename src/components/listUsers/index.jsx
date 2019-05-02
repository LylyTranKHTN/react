import React, {Component} from 'react'
import User from './User'

class ListUsers extends Component{
      componentDidMount() {
            this.props.fetchAPIUsers()
      }

      render() {
            console.log('render')
            console.log(this.props.users)
            if (this.props.users.numOfUsers > 0) {
                  return(
                        this.props.users.users.map(user =>
                              <User user={user}></User>)
                  )
            }
            else{
                  return <div></div>
            }
      }

}
export default ListUsers;