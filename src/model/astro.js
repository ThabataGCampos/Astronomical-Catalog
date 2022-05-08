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
        type: Sequelize.STRING(20),
        allowNull: true
    }, 
    nickname: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    image: {
        type: Sequelize.STRING(300),
        allowNull: true
    },
    description: {
        type: Sequelize.STRING(2000),
        allowNull: true
      
    },
    distance: {
        type: Sequelize.STRING(300),
        allowNull: true
    },
    category: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    constellation: {
        type: Sequelize.STRING(50),
        allowNull: true
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAd: false,
    timestamps: false
})

// para subir no render
const initTable = async () => {
    await astro.sync()
}

initTable()