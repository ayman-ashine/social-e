const mongoose = require('mongoose')

const post_schema = new mongoose.Schema({

  user: String,
  data: String

})

export default mongoose.models.post || mongoose.model('post', post_schema)