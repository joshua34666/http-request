import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ButtonClickDataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(()  => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type='button' onClick={handleClick} >Fetch Post</button>
        <h3>{post.title}</h3>
      {/* <ul>
      {
        posts ? 
        posts.map(post => <li key={post.id}>{post.title}</li>) : null
      }
      </ul> */}
    </div>
  )
}

export default ButtonClickDataFetching
