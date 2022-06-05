const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method;
    const id = req.query.id || '';

    // Get blog list
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);

        return new SuccessModel(listData);
    }

    // Get blog detail
    if (method === 'GET' && req.path === '/api/blog') {
        const data = getDetail(id)
        return new SuccessModel(data);
    }

    // Post new blog
    if (method === 'POST' && req.path === '/api/blog') {
        const data = newBlog(req.body)
        return new SuccessModel(data);
    }

    // Update  blog
    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id, req.body);
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('update blog fail')
        }
    }

    // Delete
    if (method === 'POST' && req.path === '/api/blog/delete') {
        const result = deleteBlog(id);
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('delete blog fail')
        }
    }
}


module.exports = handleBlogRouter;