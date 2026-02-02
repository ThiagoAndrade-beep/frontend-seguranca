require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('./models/User')

const db = require('./db')
db()

const app = express()
app.use(express.json())

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({ msg: 'Usuário não autorizado' })
    }

    try {
        const secret = process.env.SECRET
        const decoded = jwt.verify(token, secret)

        req.userId = decoded.id

        next()
    } catch (error) {
        return res.status(400).json({ msg: 'Token inválido' })
    }
}

app.get('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id
    const userData = await User.findById(id, '-password')

    if (!userData) {
        return res.status(404).json({ msg: "Usuário não encontrado" })
    }

    if(id !== req.userId) {
        return res.status(403).json({msg: 'Acesso negado!'})
    }

    res.status(200).json({ userData })
})

app.post('/register', async (req, res) => {
    const { email, password } = req.body
    const passwordRegex = /^(?=.*[@$!%*?&#])/;
    const justNumber = /\d/;

    const resultCaracter = passwordRegex.test(password)
    const resultNumber = justNumber.test(password)

    if (!email) {
        return res.status(422).json({ msg: 'Preencha o campo com seu email' })
    }

    if (!password) {
        return res.status(422).json({ msg: 'Preencha o campo com sua senha' })
    }

    if (password.length < 6) {
        return res.status(422).json({ msg: 'A senha deve conter pelo menos 6 caracteres' })
    }

    if (!resultCaracter) {
        return res.status(422).json({ msg: 'A senha deve conter pelo menos 1 caracterer especial' })
    }

    if (!resultNumber) {
        return res.status(422).json({ msg: 'A senha deve conter pelo menos 1 número' })
    }

    const userExist = await User.findOne({ email: email })
    if (userExist) {
        return res.status(422).json({ msg: 'Esse email já está cadastrado' })
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({
        email,
        password: passwordHash
    })

    try {
        await user.save()
        res.status(200).json({ msg: 'Usuário cadastrado com sucesso!' })
    } catch (error) {
        return res.status(500).json({ msg: 'Erro ao cadastrar o usuário' })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    if (!email) {
        return res.status(422).json({ msg: 'Preencha o campo com seu email' })
    }

    if (!password) {
        return res.status(422).json({ msg: 'Preencha o campo com sua senha' })
    }

    const userExist = await User.findOne({ email: email })
    if (!userExist) {
        return res.status(404).json({ msg: 'Nenhum usuário com esse email foi encontrado' })
    }

    const userPassword = await bcrypt.compare(password, userExist.password)
    if (!userPassword) {
        return res.status(422).json({ msg: 'Senha incorreta' })
    }

    try {
        const secret = process.env.SECRET
        const token = jwt.sign(
            {
                id: userExist._id
            },
            secret
        )
        res.status(200).json({ msg: 'Usuário logado com sucesso!', token })
    } catch (error) {
        console.log('Algo de errado aconteceu', error)
    }

})

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'bem vindo a nossa api' })
})

app.listen(3000)