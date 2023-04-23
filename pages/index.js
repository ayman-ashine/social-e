import { useState, useEffect } from "react"

export default function Home() {

  const [username, setUsername] = useState('')
  const [data, setData] = useState('')
  const [posts, setPosts] = useState([])

  const add_post = () => {

    if(username && data) {

      fetch('/api', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user: username, data: data })
      })
      .then( () => {
        get_posts()
      })

    } else {

      alert('Fill the inputs')

    }

  }

  const get_posts = () => {

    fetch('/api')
    .then( res => res.json())
    .then( data => {
      setPosts(data)
    })

  }

  useEffect( () => {

    get_posts()

  }, [])

  return (
    <>
      
      <div className="con_main">

        <div className="con_add_post">

          <input className="input-username" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
          <input className="input-data" type="text" placeholder="data" onChange={(e) => setData(e.target.value)}/>
          <button className="btn-add" onClick={add_post}>Add</button>

        </div>

        <div className="con_posts">
          
          {
            posts.map( (post, index) => {

              return (
                <div className="post" key={index}>

                  <u>{post.user}</u>
                  <p>{post.data}</p>

                </div>
              )

            })
          }

        </div>

      </div>
      
    </>
  )

}
