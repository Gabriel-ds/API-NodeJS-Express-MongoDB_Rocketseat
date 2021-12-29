const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mongodb:mongodb@apicluster.rzh2g.mongodb.net/mongodb?retryWrites=true&w=majority', 
{ useNewUrlParser: true, 
useUnifiedTopology: true })
mongoose.Promise = global.Promise

module.exports = mongoose