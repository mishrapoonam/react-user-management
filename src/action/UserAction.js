import * as ActionType from './ActionType';
import UserApi from '../api/UserApi';

export const getUsersResponse = users => ({
    type: ActionType.GET_USERS_RESPONSE,
    users
});



export function getUsersAction() {
    return (dispatch) => {
        return UserApi.getAllUsers()
            .then(users => {
                dispatch(getUsersResponse(users));
            }).catch(error => {
                throw error;
            });
    };
}

export const deleteUserResponse = () => ({
    type: ActionType.DELETE_USER_RESPONSE
});



export function deleteUserAction(useId) {
    return (dispatch) => {
        return UserApi.deleteUser(useId)
            .then(() => {
                dispatch(deleteUserResponse());
            }).then(() => {
                dispatch(getUsersAction());
            }).catch(error => {
                throw error;
            });
    };
}