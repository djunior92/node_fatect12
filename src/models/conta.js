module.exports = app => {
    let ContasSchema = app.db.mongoose.Schema({
        tipo: {
            type: String,
            required: [true, 'é obrigatório']
        },
        titulo: {
            type: String,
            required: [true, 'é obrigatório']
        },
        vencimento: {
            type: Date,
            required: [true, 'é obrigatório']
        },   
        valor: {
            type: Number,
            required: [true, 'é obrigatório']
        },     
        concluido: {
            type: Boolean,
            required: [true, 'é obrigatório']
        },
    })

    app.db.mongoose.model("Contas", ContasSchema);
}


