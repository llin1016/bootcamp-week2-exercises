const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!
  try {
    // Get the first 5 users, ordered by lastName
    const lastName = await User.query().select()
    .orderBy('lastName')
    .limit(5)
    .offset(5)
    
    console.log(lastName)

    // Get the second 5 users, ordered by lastName 

    const lastName1 = await User.query().select()
    .orderBy('lastName')
    .limit(5)
    .offset(5)
    
    console.log(lastName1)
  }
  catch (err) {
    console.log(err)
  }



  // -----
  cleanup()
}

run()
