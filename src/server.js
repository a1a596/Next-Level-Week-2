const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

//config do svr
server
.use(express.urlencoded({ extended: true}))
.use(express.static("public"))

.get("/", pageLanding)// função curta com =>
    

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)