import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react"

export default function Home() {

  const [username, setUsername] = useState('')
  const [data, setData] = useState('')
  const [posts, setPosts] = useState([])

  const run_stop_loader = () => {

    const loader = document.querySelector(`.${styles.loader}`)

    loader.classList.toggle('hide')

  }

  const add_post = () => {

    if(username && data) {

      run_stop_loader()

      fetch('/api', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user: username, data: data })
      })
      .then( () => {
        
        run_stop_loader()
        setData('')
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

    setInterval( get_posts, 1000 )

  }, [])

  return (
    <>
      <div className={styles.con_main}>

        <div className={styles.con}>

          <input className={styles.input_username} type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <textarea className={styles.input_data} placeholder="description" value={data} onChange={(e) => setData(e.target.value)}></textarea>
          <button className={styles.btn_add} onClick={add_post}>
            Add <span className={[styles.loader, 'hide'].join(' ')}></span>
          </button>

        </div>

        <div className={styles.con}>

          <div className={styles.con_reveres}>
            {
              posts.map( (post, index) => {

                return (

                  <div className={styles.post} key={index}>

                    <p className={styles.user}>{post.user}</p>
                    <p className={styles.data}>{post.data}</p>

                  </div>
                  
                )

              })
            }
          </div>

        </div>
        </div>
      
    </>
  )

}
