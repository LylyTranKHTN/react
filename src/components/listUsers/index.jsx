import React, {Component} from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import _ from 'lodash';
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
          }
    
      componentDidMount = () => {
            console.log('fetch api')
            this.props.fetchAPIUsers();
      }

      static getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.users !== prevState && (typeof prevState.data === 'undefined' || prevState.data.length === 0)) {
                  console.log('state')
                  for (var i = nextProps.users.per_page; i < nextProps.users.total; i++) {
                        nextProps.users.users.push({"id":i + 1,"first_name":"Emma","last_name":"Wong","avatar":""})
                  }
                  return {
                        data: nextProps.users.users,
                        pages: nextProps.users.total_pages,
                        pageSize: nextProps.users.per_page,
                        pageIndex: nextProps.users.page,
                  }
            }
            return null;
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
            if (this.props.users.status === LIST_USERS_SUCCESS) {
                  console.log(this.state.data.slice(
                        (this.state.pageIndex - 1) * this.state.pageSize,
                        this.state.pageIndex * this.state.pageSize
                        ))
                  return(
                        <ReactTable
                              data={this.state.data}
                              columns={columns}
                              page={this.state.pageIndex - 1}
                              pageSize={this.state.pageSize}
                              pages={this.state.pages}

                              onPageChange={(pageIndex) => {
                                    console.log(pageIndex)
                                    this.setState({pageIndex: pageIndex + 1})
                              }}
                              onPageSizeChange={(pageSize) => {
                                    this.setState({pageSize: pageSize})
                              }}
                        />
                  )}
            if (this.props.users.status === LIST_USERS_FAILURE) {
                  return (
                        <div>{this.props.users.error}</div>
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
            users: state.users
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