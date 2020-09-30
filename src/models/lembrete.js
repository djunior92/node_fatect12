module.exports = app => {
    let LembretesSchema = app.db.mongoose.Schema({
        titulo: {
            type: String,
            required: [true, 'é obrigatório']
        },
        descricao: {
            type: String,
            required: [true, 'é obrigatório']
        },
        data: {
            type: Date,
            required: [true, 'é obrigatório']
        },
        observacao_conclusao: {
            type: String
        },
        concluido: {
            type: Boolean,
            required: [true, 'é obrigatório']
        }
    })

    app.db.mongoose.model("Lembretes", LembretesSchema);
}


