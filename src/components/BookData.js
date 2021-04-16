import React, { useState } from 'react'
import AddUserForm from './AddUserForm';
import UserTable from './table/userTable'; 
import EditUserForm from './EditUserForm';


export default function BookData() {
    const [book, setBook] = useState({
        title: '',
        available: false
    })

    const [users, setUsers] = useState(
        [
            {id: 1, name: 'Tania', username: 'Dj' },
            {id: 2, name: 'Ben', username: 'MrBen' },
            {id: 3, name: 'John', username: 'Johnny' }
        ]
    )

    const [editing, setEditing] = useState(false);
    const initialFormState = {id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username})
    }
    const updateUser = (id, updateUser) => {setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updateUser : user)))
    }

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const updateBook = (book) => {
        setBook({title: book.title,
        available: book.available })
    }

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className='flex-row'>
                <div className='flex-large'>
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                        <h2>Add User</h2>
                        <AddUserForm addUser={addUser} />
                    </div>
                    )}
                </div>
                <div className='flex-large'>
                    <h2>View Users</h2>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
       
    )
}
