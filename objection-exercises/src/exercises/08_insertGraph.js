const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  try {
    // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
    const graphInsert = await User.query().insertGraph(
      [
        {
          firstName: 'Peter',
          lastName: 'Bynum',
          email: 'pbynum@test.com',
          pet: [
            {type: 'DOG', name: 'Rocco'},
            {type: 'DOG', name: 'Rosey'},
          ]
        }
      ]
    )
    console.log(graphInsert)
  }
  catch (err) {
    console.log(err)
  }


  // -----
  cleanup()
}

run()
