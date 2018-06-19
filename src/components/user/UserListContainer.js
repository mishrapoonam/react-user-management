import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../action/UserAction';
import UserList from './UserList';



export class UserListContainer extends Component {

    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }


    componentDidMount() {
        this.props.action.getUsersAction()
            .catch(error => {
                console.log(error);
            });
    }



    handleDelete(id) {
        if (id!=null) {                     
            this.props.action.deleteUserAction(id)
                .catch(error => {
                    console.log(error);
                });
        }
    }


    render() {
        const { users } = this.props;
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h3>Users List</h3>                        
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <UserList users={users} handleDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    users: state.userReducer.users
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(userAction, dispatch)

});



UserListContainer.propTypes = {
    users: PropTypes.array,
    action: PropTypes.object.isRequired,
};



export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
