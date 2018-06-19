import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { UserListContainer } from '../UserListContainer';


describe('UserListContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            users: [
                { title: 'Testing User array data' }
            ],
            action: { getUsersAction: jest.fn() }
        };

        const wrapper = shallow(<UserListContainer {...props} />);

        expect(wrapper).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });

  
});

