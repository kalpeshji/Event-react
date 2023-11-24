import React, { useState } from 'react';
import './assets/css/style.css'
import img1 from './assets/images/bg.jpg'

export default function Event() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState({})

    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleAdd = (name, email) => {
        const error ={}
        if (name && email) {
            setUsers([...users, { name, email }])
            setName('')
            setEmail('')
        }
        if(name == undefined || name === "") {
            error.name = 'name is required!'
        }else if(email == undefined || email === ""){
            error.email = 'email is required!'
        }
        return error
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(handleAdd(name,email))
    }
 
    return (
        <>
            <img src={img1} alt="" />
            <form action="" onSubmit={handleSubmit}>
                <h3>Fill Details</h3>
                <input type="text" value={name} onChange={handleName} placeholder="Enter Name *"/>
                <p className='error'>{error && error.name}</p>
                <input type="email" value={email} onChange={handleEmail} placeholder="Enter Email *"/>
                <p className='error'>{error && error.email}</p>
                <button onClick={handleAdd}>Add User</button>
            </form>
            <div className="data" >
                <h3>Users</h3>
                {users.map((user, index) => (
                    <div className='deta' key={index}>
                        <p>{index + 1 + '. '}Name : {user.name}</p>
                        <p className='ml-5'>Email : {user.email}</p>
                    </div>
                ))}
            </div>
        </>
    )
}