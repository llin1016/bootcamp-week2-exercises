const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

   try {
      const scrappy = await User.transaction(async trx => {
      const newUser = await User.query(trx)
        .insert({ 
          email: 'testtesttest@test.com',
          firstName: 'Hello', 
          lastName: 'Goodbye',
          age: '38'
        })
  
      const scrappy = await newUser.$relatedQuery('pet', trx)
        .insert({ 
          type: 'CAT',
          name: 'Adios'
        })
  
      console.log(scrappy)
    })
   } catch(err) {
    console.log(err)
   }

  cleanup()
}

run()
