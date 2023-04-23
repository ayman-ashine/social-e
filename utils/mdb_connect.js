const mongoose = require('mongoose')

export default async function Mdb_Connect() {

  try {

    await mongoose.connect('mongodb+srv://mongo_db_0:NOwL3kzbB7fkHqUM@cluster0.rqbgzek.mongodb.net/app',
    {useUnifiedTopology:true, useNewUrlParser:true});
    console.log('[@mdb connected successfully]')

  } catch (error) {

    console.log(error)

  }

}