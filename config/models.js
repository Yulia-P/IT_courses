const Sequelize = require('sequelize')

const Model = Sequelize.Model;

class Users extends Model{}
class Repos extends Model{}
class Commits extends Model{}
Users.init (
    {
        id:	{type: Sequelize.INTEGER, primaryKey:true, autoIncrementIdentity: true},
        username:{type: Sequelize.STRING, allowNull: false},
        password:	{type: Sequelize.STRING, allowNull: false},
        role: {type: Sequelize.STRING, validate: {isIn:[['user', 'admin']]}}
    },
    {sequelize, modelName:'Users', tableName:'users', timestamps: false}
)

module.exports = { Users }