
// This file mocks a web API by working with the hard-coded data below.
// All calls return promises.
const users = [
    {
        "id": "1",
        "first_name": "Eve",
        "last_name": "Holt",
        "email" : "eve.holt@gmail.com",
        "phone" : "222-4444-222"
    },
    {
        "id": "2",
        "first_name": "Charles",
        "last_name": "Morris",
        "email" : "morris.charles@gmail.com",
        "phone" : "256-5656-222"
    },
    {
        "id": "3",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "email" : "tracy.r@gmail.com",
        "phone" : "423-2345-233"
    },
    {
        "id": "4",
        "first_name": "John",
        "last_name": "Smith",
        "email" : "smith.j@gmail.com",
        "phone" : "231-5446-222"
    },
    {
        "id": "5",
        "first_name": "Leanne",
        "last_name": "Graham",
        "email" : "leanne.graham@gmail.com",
        "phone" : "121-4563-432"
    }
];

class UserApi {

    // to get all the users
    static getAllUsers() {
        return new Promise((resolve) => {
                resolve(Object.assign([], users));
        });
    }


    // to delete selected user
    static deleteUser(id) {
        return new Promise((resolve) => {
                const indexDelete = users.findIndex(user => user.id === id);
                users.splice(indexDelete, 1);
                resolve();
        });
    }

}

export default UserApi;
