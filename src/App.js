import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    age: ""
  });

  const formFields = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "age", type: "number", placeholder: "Age" }
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.age) return;


    const user = {
      ...newUser,
      id: Date.now(),
      age: Number(newUser.age) 
    };

    setUsers((prevUsers) => [...prevUsers, user]);
    setNewUser({
      name: "",
      email: "",
      age: ""
    });
  };
  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h2>User Management</h2>

      {/* Dynamic form */}
      <form onSubmit={handleSubmit} className="user-form">
        {formFields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            value={newUser[field.name]}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            required
          />
        ))}
        <button type="submit">Add User</button>
      </form>

      {/* User Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;