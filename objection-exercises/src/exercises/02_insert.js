const cleanup = require('../lib/cleanup')

// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  
    try {
      // Insert yourself in the users table
      const insertMyself = await User.query().insert({
        email: 'test@com',
        firstName: 'Testtest',
        lastName: 'Test',
        age: 13
      }).returning("*")

      // Insert a pet belonging to you (get your ID from Postico or DBeaver)
      const insertPet = await Pet.query().insert({
        ownerId: '4c74d030-3e57-409b-940e-37d26719095c',
        type: 'CAT',
        name: 'Chopin',
      }).returning('*')
    }
    catch (err) {
      console.log(err)
    }


  // -----
  cleanup()
}

run()
