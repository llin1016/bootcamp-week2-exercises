const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  try {
      // Use basic queries to test any virtual attributes you wrote on your models
      const person = await User.query().first()
      console.log(person)
      console.log(person.fullName())
      console.log(person.ageTest())

  } catch (err) {
    console.log(err)
  }


  // -----
  cleanup()
}

run()
