const handleBlogRouter = (req, res) => {
    const method = req.method;

    // Get blog list
    if (method === 'GET' && req.path === '/api/blog/list') {
        return {
            msg: 'This is blog list api'
        }
    }

    // Get blog detail
    if (method === 'GET' && req.path === '/api/blog') {
        return {
            msg: 'This is blog detail api'
        }
    }

    // Post new blog
    if (method === 'POST' && req.path === '/api/blog') {
        return {
            msg: 'This creates a new post'
        }
    }

    // Patch  blog
    if (method === 'PATCH' && req.path === '/api/blog') {
        return {
            msg: 'This pathch a blog'
        }
    }

    // Delete
    if (method === 'DELETE' && req.path === '/api/blog') {
        return {
            msg: 'This delete a blog'
        }
    }
}


module.exports = handleBlogRouter;