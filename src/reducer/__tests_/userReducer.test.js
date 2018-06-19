import userReducer from '../userReducer';
import * as UserAction from '../../action/UserAction';
import * as ActionType from '../../action/ActionType';



describe('userReducer.test.js', ()  => {

    it('has a default state', () => {
        const initialState = undefined;
        const action = { type: 'testing text' };

        const newState = userReducer(initialState, action);

        const expectedState = { users: [] };

        expect(newState).toEqual(expectedState);
    });



    it(`should get all users when passed ${ActionType.GET_USERS_RESPONSE}`, () => {
        const initialState = {
            users: []
        };

        const users = [{id: 1, title: 'A'}, {id: 2, title: 'B'}];

        const action = UserAction.getUsersResponse(users);

        const newState = userReducer(initialState, action);

        expect(newState.users.length).toEqual(2);
        expect(newState.users[0].id).toEqual(1);
    });    


});
