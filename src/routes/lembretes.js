module.exports = (app) => {
    app.get("/lembretes", app.controllers.lembretesController.listarLembretes)
    app.get("/lembretes/:id", app.controllers.lembretesController.consultarPorId)
    app.post("/lembretes", app.controllers.lembretesController.adicionar)
    app.put("/lembretes/:id", app.controllers.lembretesController.atualizar)
    app.put("/lembretes/concluir/:id", app.controllers.lembretesController.concluir)
    app.delete("/lembretes/:id", app.controllers.lembretesController.excluir)
}
