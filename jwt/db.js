require('dotenv').config()
const mongoose = require('mongoose')

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

async function connect() {
    try {
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.yicwex9.mongodb.net/front-security?appName=Cluster0`)
        console.log('banco conectado')
    } catch (error) {
        console.log('erro ao conectar com o banco', error)
    }
}

module.exports = connect