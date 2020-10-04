module.exports = (app) => {
    app.get("/contas", app.controllers.contasController.listarContas)
    app.get("/contas/:id", app.controllers.contasController.consultarPorId)
    app.post("/contas/pagar", app.controllers.contasController.adicionar_pagar)
    app.post("/contas/receber", app.controllers.contasController.adicionar_receber)
    app.put("/contas/:id", app.controllers.contasController.atualizar)
    app.put("/contas/concluir/:id", app.controllers.contasController.concluir)
    app.delete("/contas/:id", app.controllers.contasController.excluir)
}
