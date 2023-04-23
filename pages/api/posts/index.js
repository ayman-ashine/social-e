import Post from '@/models/post'
import Mdb_Connect from '@/utils/mdb_connect'

Mdb_Connect()

export default async function handler(req, res) {

  if(req.method === 'GET'){

    try {
      const posts = await Post.find({})
      res.send(posts)
    } catch (error) {
      console.log('[@mdb GET Somthing went wrong]')
    }

  } else if(req.method === 'POST') {

    try {
      const { user, data } = req.body
      console.log({ user, data })
      const newpost = await Post({ user, data })
      await newpost.save()
      res.send({message: "post added"})
    } catch (error) {
      console.log('[@mdb POST Somthing went wrong]')
    }

  }

}
