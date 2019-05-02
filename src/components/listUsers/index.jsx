import React, {Component} from 'react'
import User from './User'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class ListUsers extends Component{
      constructor(props) {
            super(props);
            this.state = {data: []};
          }
    
      componentDidMount() {
            this.props.fetchAPIUsers()
      }

      static getDerivedStateFromProps(nextProps, prevState) {
            prevState.data = nextProps.users.users
            console.log(nextProps.users)
            for (var i = nextProps.users.per_page; i < nextProps.users.total; i++) {
                  prevState.data.push({"id":3,"first_name":"Emma","last_name":"Wong","avatar":""})
            }
            return {
                  data: prevState.data
            }
      }

      render() {
            console.log('render')
            console.log(this.state.data)
            const columns = [{
                  Header: 'ID',
                  accessor: 'id' // String-based value accessors!
                }, {
                  id: 'firstName',
                  Header: 'First Name',
                  accessor: 'first_name',
                }, {
                  Header: 'Last Name',
                  accessor: 'last_name' // Custom value accessors!
                }, {
                  Header: 'Avatar',
                  accessor: 'avatar' // Custom value accessors!
                }]
            return(
                  <ReactTable data={this.state.data}
                  columns={columns}
                  page={this.props.users.page - 1}
                  pageSize={this.props.users.per_page}
                  // sorted={[{
                  //       id: 'firstName',
                  //       desc: false
                  //   }]}
                  onPageChange={(pageIndex) => {
                        console.log(pageIndex + 1)
                        this.props.fetchAPIUsers()
                  }}
                  />
            )
      }

}
export default ListUsers;