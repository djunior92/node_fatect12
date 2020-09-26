module.exports = (app) => {
    app.get("/usuarios", app.controllers.usuariosController.listarUsuarios)
    app.get("/usuarios/:id", app.controllers.usuariosController.consultarPorId)
    app.post("/usuarios/adicionar", app.controllers.usuariosController.adicionar)
    app.put("/usuarios/:id", app.controllers.usuariosController.atualizar)
    app.delete("/usuarios/:id", app.controllers.usuariosController.excluir)
    app.post("/usuarios/login", app.controllers.usuariosController.login)
}
