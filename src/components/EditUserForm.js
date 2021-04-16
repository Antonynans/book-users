import React, { useEffect, useState } from 'react';


export default function EditUserForm(props) {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChanege = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
            props.updateUser(user.id, user)
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>Name</label>
            <input className='form-input' type='text' name='name' value={user.name} onChange={handleInputChanege} />
            <label>Username</label>
            <input className='form-input' type='text' name='username' value={user.username} onChange={handleInputChanege} />
            <div className='button-container'>
                <button className='form-button success'>Update user</button>
                <button className='form-button danger' onClick={() => props.setEditing(false)}>Cancel</button>
            </div>
        </form>
    )
}
