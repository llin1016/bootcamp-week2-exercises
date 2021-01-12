const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')
const { userParams } = require('../lib')

const run = async () => {
  // Write Queries and Logs Here !!!
  try {
    // // Get an instance of a user using findById(<YOUR_ID>)
    const user = await User.query().findById('b1e09ee3-9344-4f66-8e69-ad7c5e16efa3')

    // // Use that instance to create a new pet related that user
    const newPet = await user.$relatedQuery('pet').insert(
      {
        type:"DOG",
        name:"Ice Bear"
      }
    )

    console.log(newPet)

    // Use that instance to get all of the user's pets and children
    // Hint -- use $fetchGraph
    // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
    const userPetsChildren = await user.$fetchGraph('[pet, parent]')

    console.log(userPetsChildren)

  } catch(err) {
    return console.log(err)
  }

  cleanup()
}

run()
