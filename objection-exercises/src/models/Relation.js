const { HasManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
    static get tableName() {
        return 'relations'
    }

    static get relationMappings() {
        const User = require('./User')
        return {
            child: {
                relation: HasManyRelation,
                modelClass: User,
                join: {
                    from: 'relations.childId',
                    to: 'users.id'
                }
            },

            parent: {
                relation: HasManyRelation,
                modelClass: User,
                join: {
                    from: 'relations.parentId',
                    to: 'users.id'
                }
            }         

        }
    }
}

module.exports = Relation