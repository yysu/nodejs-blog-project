const { getList } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method;

    // Get blog list
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);

        return new SuccessModel(listData);
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