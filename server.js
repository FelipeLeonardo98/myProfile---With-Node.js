const express = require("express");
const server = express();
const nunjucks = require('nunjucks');

server.use(express.static('public'))
server.use(express.static('img/series'))
server.use(express.static('song'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get('/', function (req, resp) {
    return resp.render("index")
})

server.get('/build', function (req, resp) {
    return resp.render("build")
})

server.get('/series', function (req, resp) {
    return resp.render("series")
})
server.listen(5000, function () {
    console.log("Your Server is running on: port 5000")
})