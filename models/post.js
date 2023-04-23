const mongoose = require('mongoose')

const post_schema = new mongoose.Schema({

  user: String,
  data: String

})

export default mongoose.models.Post || mongoose.model('Post', post_schema)