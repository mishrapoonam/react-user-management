import * as ActionType from '../action/ActionType';

const initialState = {
        users: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionType.GET_USERS_RESPONSE: {
            // '...' spread operator clones the state
            
            return {
                ...state, 
                users: action.users
            };
        }


        default: { return state; }
    }
};

export default userReducer;