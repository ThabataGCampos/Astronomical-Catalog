import Sequelize from "sequelize"
import dotenv from "dotenv"

dotenv.config()  //para ter acesso ao .env

export const connection = new Sequelize(
//     process.env.DB_BASE,
//     process.env.DB_USER,
//     process.env.DB_PASS,
//     {
//         host: process.env.DB_LOCAL,
//         port: 5432,
//         dialect: 'postgres'
//     }
// )

// para subir para o render
'postgres://astronomical_user:QiODynBYb1eE16hyKKXlHXAb43PuX4mT@dpg-c9rgh30ivq0corledgmg-a.oregon-postgres.render.com/astronomical',
{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}
)
