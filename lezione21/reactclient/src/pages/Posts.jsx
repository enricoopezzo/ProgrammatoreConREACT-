import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Posts() {

    const [userLog, setUserLog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userLogJson = localStorage.getItem('userLogin');
        if(userLogJson) {
            let logUser = JSON.parse(userLogJson);
            setUserLog(logUser);
            axios.get('http://localhost:3000/posts', { 
                headers: {"Authorization" : `Bearer ${logUser.accessToken}`} })
                .then(response => console.log(response))
        } else {
            navigate('/login')
        }
    }, [])


    const savePost = () => {
        let p = { date: new Date(), txt: 'Testo di prova', userId: userLog.user.id}
        axios.post('http://localhost:3000/posts', p, { 
            headers: {"Authorization" : `Bearer ${userLog.accessToken}`} })
            .then(response => console.log(response))
    }

  return (
    <>
    <div>Posts</div>
    <button onClick={savePost}>Add Post</button>
    </>
  )
}
