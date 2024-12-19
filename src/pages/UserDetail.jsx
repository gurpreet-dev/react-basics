import React from 'react'
import { Link, useParams, useNavigate } from 'react-router'

function UserDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
        <div><h1>User ID: <strong>{id}</strong></h1></div>
        <div>
            <Link onClick={() => navigate(-1)}>Go Back</Link>
        </div>
        </>
    )
}

export default UserDetail