const mongoose = require('mongoose')

module.exports = (app) => {
    mongoose.connect("mongodb://localhost:27017/lancamentost12", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => console.log("Conexão foi realizada com o MongoDB"))
        .catch((error) => console.log(`Erro ao conectar ao MongoDB: ${error}`))

    return mongoose;
} 