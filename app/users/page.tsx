"use client";

import { useEffect, useState } from "react";

type User = {
_id: string;
name: string;
email: string;
points: number;
streak: number;
};

export default function UsersPage() {
const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
fetch("/api/user")
.then((res) => res.json())
.then((data) => setUsers(data.users))
.catch((err) => console.error(err));
}, []);

const deleteUser = async (id: string) => {
const confirmDelete = confirm("Are you sure you want to delete this user?");

if (!confirmDelete) return;

const res = await fetch(`/api/user/${id}`, {
  method: "DELETE",
});

const data = await res.json();

alert(data.message);

setUsers(users.filter((user) => user._id !== id));

};

return (
<div style={{ padding: "20px" }}>
<h1>Users</h1>

  {users.map((user) => (
    <div
      key={user._id}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
      }}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Points: {user.points}</p>
      <p>Streak: {user.streak}</p>

      <button
        onClick={() => deleteUser(user._id)}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Delete
      </button>
      <button
  onClick={() => window.location.href = `/edit-user/${user._id}`}
  style={{
    backgroundColor: "orange",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    marginRight: "10px",
    cursor: "pointer",
  }}
>
  Edit
</button>
    </div>
  ))}
</div>

);
}