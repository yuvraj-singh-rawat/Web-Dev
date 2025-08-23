let http = require("http")

let server = http.createServer( (req, res) => {

    if (req.url == "/news") { // http://localhost:8000/news
        let obj = {
            status: 1,
            data: [
                {
                    newsTitle: 'news',
                    newsDes: 'Hello World'
                }, 
                {
                    newsTitle: 'World',
                    newsDes: 'Tech'
                }
            ]
        }

        res.end(JSON.stringify(obj))
    }
    if (req.url == "/about") { // http://localhost:8000/about
        res.end("Welcome to About")
    }
    if (req.url == "/course") { // // http://localhost:8000/courses
        res.end("Welcome to Courses")
    }
    if (req.url == "/") { // // http://localhost:8000
        res.end("welcome to js")
    }

})

server.listen("8000") // http://localhost:8000