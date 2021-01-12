const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  try {
    const deleteCats = await Pet.query().delete()
    .where('type','CAT').returning('*')
  }
  catch (err) {
    console.log(err)
  }

  cleanup()
}

run()
