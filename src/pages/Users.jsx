import React from 'react'
import { Link } from 'react-router'

function Users() {

    const users = [
        {
            id: 'mathew',
            name: 'Mathew'
        },
        {
            id: 'alen',
            name: 'Alen'
        },
        {
            id: 'daina',
            name: 'Daina'
        }
    ]

    return (
        <>
        <h1>Users</h1>
        <div className='mt-5'>
            <dl>
            {
            users.map((user, index) => (
                <dd key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></dd>
            ))
            }
            </dl>
        </div>
        </>
    )
}

export default Users