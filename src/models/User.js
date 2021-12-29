const mongoose = require('../database')
const bcrypt = require('bcryptjs')          //Biblioteca que criptografa a senha 


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAd: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async function(next) {           //Faz a criptografia da senha
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User