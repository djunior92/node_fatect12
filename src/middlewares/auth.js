module.exports = app => {
    app.use((req, res, next) => {
        //next(); //executa o próximo passo
        if (req.originalUrl == "/usuarios/login" || req.originalUrl == "/usuarios/adicionar") {
            next()
        } else {
            let token = req.headers.token
            //let token = req.headers.authorization
            //if (!authorization)
            if (!token)
                res.status(401).send("Faltou enviar o token")
            else {
                app.get("jwt").verify(token, "chavesecreta", (error, decoded) => {
                    if (error)
                        res.status(401).send("Token inválido")
                    else {
                        req.decoded = decoded
                        next();
                    }
                })
            }
        }
    })
}