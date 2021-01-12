const cleanup = require('../lib/cleanup')
// Import models

const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const specificName = await User.query().where('firstName', 'Adolphus')
  console.log(specificName)

  // Do the same with object notation
  const specificName1 = await User.query().where({firstName: 'Adolphus'})
  console.log(specificName1)

  // Get all DOGS and BIRDS
  const dogsBirds = await Pet.query().whereIn('type',['DOG','BIRD'])
  console.log(dogsBirds)

  // -----
  cleanup()
}

run()
