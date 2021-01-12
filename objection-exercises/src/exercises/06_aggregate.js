const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  try {
    // Write Queries and Logs Here !!!

    // Get the total number of users
    const numUsers = await User.query().select().count()
    console.log(numUsers)

    // Get the average age of users
    const avgAge = await User.query().select().avg('age')
    console.log(avgAge)

    // Get the total number of dogs
    const numDogs = await Pet.query().select().where('type','DOG').count()
    console.log(numDogs)
  }
  catch (err) {
    console.log(err)
  }


  // -----
  cleanup()
}

run()
