import React, { useState } from 'react';
import './style.css';

export default function AddUserForm(props) {
    const initialFormState = {
        id: null,
        name: '',
        username: ''
    }
    const [user, setUser] = useState({initialFormState})

    const handleInputChanege = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(user.name && user.username)
             props.addUser(user)
            setUser(initialFormState)
    }

    return (
        <form className='form' onSubmit={handleSubmit}> 
            <label>Name</label>
            <input className='form-input' type='text' name='name' value={user.name} onChange={handleInputChanege} />
            <label>Username</label>
            <input className='form-input' type='text' name='username' value={user.username} onChange={handleInputChanege} />
            <button className='form-button'>Add new user</button>
        </form>
    ) 
}
