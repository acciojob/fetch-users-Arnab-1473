import React, { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((jsonData) => {
        setUsers(jsonData.results);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const renderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{`${user.location.city}, ${user.location.country}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <button className="btn" onClick={fetchUsers}>
        Get User List
      </button>
      {users.length > 0 ? renderTable() : null}
    </div>
  );
};

export default UserList;
