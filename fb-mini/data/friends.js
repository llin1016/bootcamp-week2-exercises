const casual = require('casual')

const userData = require('../data/users')

casual.define('friends', (type1,type2) => ({
  id: casual.uuid,
  requestor_id: type1,
  requested_id: type2,
  created_at: casual.moment,
  updated_at: casual.moment,
  status: casual.boolean
}))

const friendData = []

for (let i = 0; i < 20; ++i) {
    const new1 = casual.random_element(userData).id
    const new2 = casual.random_element(userData).id
    friendData.push(casual.friends(new1,new2))
  }
  
// console.log(friendData)

module.exports = friendData