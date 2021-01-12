const { HasManyRelation, BelongsToOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get virtualAttributes(){
    return ['fullName', 'greetingString']
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  ageTest(){
    return this.age >= 18
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    const Relation = require('./Relation')
    return {
      pet: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId'
        }
      },

      children: {
        relation: BelongsToOneRelation,
        modelClass: Relation,
        join: {
          from: 'users.id',
          to: 'relations.childId'
        }
      },

      parent: {
        relation: BelongsToOneRelation,
        modelClass: Relation,
        join: {
          from: 'users.id',
          to: 'relations.parentId'
        }
      }      

    }
  }
}

module.exports = User
