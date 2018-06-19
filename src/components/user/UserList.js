import React from 'react';

   function UserList(props) {
        return (
            <div className="responsive-table">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map(x =>
                            <tr key={x.id}>
                                <td>{x.first_name}</td>
                                <td>{x.last_name}</td>
                                <td>{x.email}</td>
                                <td>{x.phone}</td>
                                <td><button className="btn btn-sm btn-danger" onClick={() => props.handleDelete(x.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        );
    }

export default UserList;
