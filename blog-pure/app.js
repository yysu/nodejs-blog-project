const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        if (req.method !== 'POST' || req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }

        let postData = ""
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
}

const serverHandler = async function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    
    // Get path
    const url = req.url
    req.path = url.split('?')[0]

    // resovle query
    req.query = querystring.parse(url.split('?')[1])

    let postData = await getPostData(req)

    // deal with post data
    req.body = postData;
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
        res.end(JSON.stringify(blogData))
        return;
    }

    const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(JSON.stringify(userData))
        return;
    }

    // no route match
    res.writeHead(404, {"Content-type": 'text/plain'})
    res.write("404 Not Found\n")
    res.end();
}

module.exports = serverHandler

//env: process.env.NODE_ENV