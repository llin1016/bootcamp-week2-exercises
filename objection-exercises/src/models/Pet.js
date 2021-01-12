const { BelongsToOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
    static get tableName() {
        return 'pets'
    }

    static get relationMappings() {
        const User = require('./User')
        return {
            pet: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: {
                  from: 'pets.ownerId',
                  to: 'users.id'
                }
            }
        }
    }
}

module.exports = Pet