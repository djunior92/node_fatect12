const lembretes = require("../routes/lembretes")

module.exports = (app) => {
    let lembretesModel = app.db.mongoose.model("Lembretes")
    const lembretesController = {}


    lembretesController.listarLembretes = async (req, res) => {
        let lembretes = await lembretesModel.find({})
        res.json(lembretes)
    }

    lembretesController.adicionar = async (req, res) => {
        try {
            let lembrete = new lembretesModel()

            lembrete.titulo = req.body.titulo
            lembrete.descricao = req.body.descricao
            lembrete.data = req.body.data
            lembrete.concluido = false

            if (await lembrete.save()) {
                res.status(200).send(`${lembrete.id}`);
            } else {
                res.status(500).send("Erro ao adicionar lembrete")
            }
        } catch (error) {
            res.status(500).send("Erro ao adicionar lembrete - " + error);
        }
    }

    lembretesController.consultarPorId = async (req, res) => {
        try {
            let _id = req.params.id
            let lembrete = await lembretesModel.findOne({ _id })
            if (lembrete)
                res.json(lembrete);
            else
                res.status(404).end()
        } catch (error) {
            res.status(404).end()

        }
    }

    lembretesController.atualizar = async (req, res) => {
        try {
            let id = req.params.id
            let lembrete = await lembretesModel.findById(id)

            lembrete.titulo = req.body.titulo
            lembrete.descricao = req.body.descricao
            lembrete.data = req.body.data

            if (await lembrete.save())
                res.send("Lembrete atualizado com sucesso")
            else
                res.status(500).send("Erro ao atualizar o lembrete")
        } catch (error) {
            res.status(500).send(`Erro ao atualizar o lembrete - ${error}`)
        }
    }

    lembretesController.concluir = async (req, res) => {
        try {
            let id = req.params.id
            let lembrete = await lembretesModel.findById(id)

            lembrete.concluido = true
            lembrete.observacao_conclusao = req.body.observacao_conclusao

            if (await lembrete.save())
                res.send("Lembrete concluído com sucesso")
            else
                res.status(500).send("Erro ao concluir o lembrete")
        } catch (error) {
            res.status(500).send(`Erro ao concluir o lembrete - ${error}`)
        }
    }

    lembretesController.excluir = async (req, res) => {
        try {
            let id = req.params.id
            if (await lembretesModel.findByIdAndRemove(id))
                res.send("Lembrete excluído com sucesso!")
            else
                res.status(500).send("Não foi possível excluir o lembrete")
        } catch (error) {
            res.status(500).send(`Não foi possível excluir o lembrete - ${error}`)
        }
    }

    return lembretesController;
}