import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", age: "" });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.age) return;
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: "", email: "", age: "" });
  };

  return (
    <div className="container">
      <h1>Cyberpunk User Management</h1>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={newUser.age}
        onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
