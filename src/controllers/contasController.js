const contas = require("../routes/contas")

module.exports = (app) => {
    let contasModel = app.db.mongoose.model("Contas")
    const contasController = {}


    contasController.listarContas = async (req, res) => {
        let contas = await contasModel.find({})
        res.json(contas)
    }

    contasController.adicionar_pagar = async (req, res) => {
        try {
            let conta = new contasModel()

            conta.tipo = "P"    //TIPO P (PAGAR) - PODERIA SER CRIADO UMA TABELA CONTAS A PAGAR
            conta.titulo = req.body.titulo
            conta.vencimento = req.body.vencimento
            conta.valor = req.body.valor
            conta.concluido = false

            if (await conta.save()) {
                res.status(200).send(`${conta.id}`);
            } else {
                res.status(500).send("Erro ao adicionar a conta")
            }
        } catch (error) {
            res.status(500).send("Erro ao adicionar a conta: " + error);
        }
    }

    contasController.adicionar_receber = async (req, res) => {
        try {
            let conta = new contasModel()

            conta.tipo = "R"    //TIPO R (RECEBER) - PODERIA SER CRIADO UMA TABELA CONTAS A RECEBER
            conta.titulo = req.body.titulo
            conta.vencimento = req.body.vencimento
            conta.valor = req.body.valor
            conta.concluido = false

            if (await conta.save()) {
                res.status(200).send(`${conta.id}`);
            } else {
                res.status(500).send("Erro ao adicionar a conta")
            }
        } catch (error) {
            res.status(500).send("Erro ao adicionar a conta: " + error);
        }
    }

    contasController.consultarPorId = async (req, res) => {
        try {
            let _id = req.params.id
            let conta = await contasModel.findOne({ _id })
            if (conta)
                res.json(conta);
            else
                res.status(404).end()
        } catch (error) {
            res.status(404).end()

        }
    }

    contasController.atualizar = async (req, res) => {
        try {
            let id = req.params.id
            let conta = await contasModel.findById(id)

            conta.tipo = req.body.tipo
            conta.titulo = req.body.titulo
            conta.vencimento = req.body.vencimento
            conta.valor = req.body.valor

            if (await conta.save())
                res.send("Conta atualizada com sucesso")
            else
                res.status(500).send("Erro ao atualizar a conta")
        } catch (error) {
            res.status(500).send(`Erro ao atualizar a conta: ${error}`)
        }
    }

    contasController.concluir = async (req, res) => {
        try {
            let id = req.params.id
            let conta = await contasModel.findById(id)

            conta.concluido = true

            if (await conta.save())
                res.send("Conta concluída com sucesso")
            else
                res.status(500).send("Erro ao concluir a conta")
        } catch (error) {
            res.status(500).send(`Erro ao concluir a conta: ${error}`)
        }
    }

    contasController.excluir = async (req, res) => {
        try {
            let id = req.params.id
            if (await contasModel.findByIdAndRemove(id))
                res.send("Conta excluída com sucesso!")
            else
                res.status(500).send("Não foi possível excluir a conta")
        } catch (error) {
            res.status(500).send(`Não foi possível excluir a conta: ${error}`)
        }
    }   

    return contasController;
}