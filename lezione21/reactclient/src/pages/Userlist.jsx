import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Table } from 'react-bootstrap'
import { TrashFill, PencilSquare, ListCheck } from 'react-bootstrap-icons';

export default function Userlist() {

    const navigate = useNavigate();
    const [userLog, setUserLog] = useState(null);
    const [userlist, setUserlist] = useState([]);

    useEffect(() => {
        const userLogJson = localStorage.getItem('userLogin');
        if(userLogJson) {
            setUserLog(JSON.parse(userLogJson));
        } else {
            navigate('/login')
        }
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3000/users').then(response => setUserlist(response.data))
    }, [])

    const removeUser = (obj) => {
        axios.delete('http://localhost:3000/users/'+obj.id).then();
    }

    const updateUser = (obj) => {
        navigate('/update/'+obj.id)
    }

  return (
    <>
    <Container>
        <Button variant="light" className='float-end' onClick={() => navigate('/logout')}>Logout</Button>
        <h2 className="my-3 text-center display-3">UserList <Button variant="warning" onClick={() => navigate('/register')}>Add User</Button></h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>City</th>
                <th></th>
                </tr>
            </thead>
        <tbody>
        {userlist.map(ele => (
            <tr key={ele.id}>
            <td>{ele.id}</td>
            <td>{ele.firstName}</td>
            <td>{ele.lastName}</td>
            <td>{ele.age}</td>
            <td>{ele.city}</td>
            <td className="text-center">
                {ele.id !== userLog.user.id ? <Button variant="outline-danger" className='btn-sm' onClick={() => removeUser(ele)}><TrashFill /></Button> : ''}
                {ele.id === userLog.user.id ? (
                    <>
                    <Button variant="outline-warning" className='btn-sm mx-1' onClick={() => updateUser(ele)}><PencilSquare /></Button>
                    <Button variant="outline-secondary" className='btn-sm mx-1' onClick={() => navigate('/users/'+ele.id+'/posts')}><ListCheck /></Button>
                    </>
         ) : ''}
            </td>
            </tr>
        ))}
            
        </tbody>
        </Table>
    </Container>
    </>
  )
}
