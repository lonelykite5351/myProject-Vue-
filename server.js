const express = require('express')
const serveStatic = require('serve-static')//靜態路徑
const path = require('path')
const app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
const port = process.env.PORT || 80
// const port = process.env.PORT
app.listen(port)