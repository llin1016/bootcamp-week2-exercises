const casual = require('casual')

const userData = require('../data/users')

casual.define('posts', (type) => ({
  id: casual.uuid,
  user_id: type,
  post: casual.sentence,
  created_at: casual.moment,
  updated_at: casual.moment,
  num_likes: casual.integer(from=0,to=100),
}))

const postData = []

for (let i = 0; i < 20; ++i) {
  postData.push(casual.posts(casual.random_element(userData).id))
}

module.exports = postData