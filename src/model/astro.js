import Sequelize from "sequelize"
import { connection } from '../database/connection.js'

export const astro = connection.define('astro',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    }, 
    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    distance: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    constellation: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAd: false,
    timestamps: false
})