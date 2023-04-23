import Post from '@/models/post'
import Mdb_Connect from '@/utils/mdb_connect'

Mdb_Connect()

export default async function handler(req, res) {

  if(req.method === 'GET'){

    try {

      const posts = await Post.find({})
      res.send(posts)

    } catch (error) {

      console.log('[@mdb GET !]')

    }

  } else if(req.method === 'POST') {

    try {

      const { user, data } = req.body
      const newpost = await Post({ user, data })
      await newpost.save()
      res.send({message: "add post"})

    } catch (error) {
      
      console.log('[ @mdb !POST ]')

    }

  } else if(req.method === 'DELETE') {

    try {

      const post = await Post.findOneAndDelete({_id: req.query.id})
      res.send({message: "delete post"})

    } catch (error) {
      
      console.log('[ @mdb !DELETE ]')

    }

  } else if(req.method === 'PUT') {

    try {

      const { user, data } = req.body
      const post = await Post.findOne({_id: req.query.id})
      post.user = user
      post.user = data
      await post.save()
      res.send({message: "update post"})

    } catch (error) {
      
      console.log('[ @mdb !PUT ]')

    }

  }

}
