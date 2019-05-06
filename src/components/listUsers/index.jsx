import React, {Component} from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {connect} from 'react-redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import {
      LIST_USERS_START,
      LIST_USERS_FAILURE, 
      LIST_USERS_SUCCESS,
} from './events'

class ListUsers extends Component{
      constructor(props) {
            super(props);
            this.state = {data: [], pages: 0, pageSize: 0, pageIndex: 0};

            this.onPageChange = this.onPageChange.bind(this)
          }
    
      componentDidMount () {
            console.log('didmount')
            this.props.fetchAPIUsers();
      }

      componentWillReceiveProps(nextProps) {
            if (nextProps.users) {

                  this.setState({
                        data: [
                              ...nextProps.users.data, 
                        ],
                        pages: nextProps.users.total_pages,
                        pageSize: nextProps.users.per_page,
                        pageIndex: nextProps.users.page,
                  });
            }
      }

      async onPageChange(pageIndex) {
            await this.props.fetchAPIUsers()
            this.setState({pageIndex: pageIndex + 1})
      }

      render() {
            console.log('render');
            console.log(this.state);
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
                  accessor: 'avatar' 
                }]
            if (this.props.users && this.props.status === LIST_USERS_SUCCESS) {
                  return(
                        <ReactTable
                              data={this.state.data}
                              manual
                              columns={columns}
                              page={this.state.pageIndex - 1}
                              pageSize={this.state.pageSize}
                              pages={this.state.pages}

                              onPageChange={(pageIndex) => {
                                    this.onPageChange(pageIndex)
                              }}
                              onPageSizeChange={(pageSize) => {
                                    this.setState({pageSize: pageSize})
                              }}
                        />
                  )}
            if (this.props.users && this.props.status === LIST_USERS_FAILURE) {
                  return (
                        <div>{this.props.error}</div>
                  )
            } 
            else {
                  return ( 
                        <div>STARTING .... </div>
                  )
            }
      }

}

const mapStateToProps = state => {
      return {
            users: state.usersReducer.data,
            status: state.usersReducer.status,
            error: state.usersReducer.error,

      }
  }
  
const mapDispatchToProps = dispatch => ({
      fetchAPIUsers: () => {
            dispatch(actions.actGetUsersRequest())
      }
})

ListUsers.propTypes = {
      fetchAPIUsers: PropTypes.func,
      users: PropTypes.shape({
            users: PropTypes.shape({
                  id: PropTypes.number,
                  first_name: PropTypes.string,
                  last_name: PropTypes.string,
                  avatar: PropTypes.string,
            }),
            per_page: PropTypes.number,
            total_pages: PropTypes.number,
            page: PropTypes.number,
            numOfUsers: PropTypes.number,
            total: PropTypes.number,
            status: PropTypes.oneOf([
                  LIST_USERS_START,
                  LIST_USERS_FAILURE,
                  LIST_USERS_SUCCESS
                  ]),
            error: PropTypes.string,
      })
}

ListUsers.defaultProps = {
      status: LIST_USERS_START,
}

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(ListUsers);