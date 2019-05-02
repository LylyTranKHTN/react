import {connect} from 'react-redux';
import listUsers from '../components/listUsers/index'
import {actGetUsersRequest} from '../actions/index'
  
const mapStateToProps = state => {
    return {
          users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAPIUsers: () => {
        dispatch(actGetUsersRequest())
    }
})

const VisibleListUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(listUsers)

export default VisibleListUsers