const Sequelize = require('sequelize')
// const db = require('./../database')

const User = Sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter your name'
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Please enter your E-mail'
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    // options    
    freezeTableName: true
});

module.exports = Sequelize.Model('User', User)