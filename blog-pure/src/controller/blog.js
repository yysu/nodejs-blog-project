const getList = (author, keyword) => {
    // return fake data, but format is right.
    return [
        {
            id: 1,
            title: 'title A',
            content: 'content A',
            createTime: 1654430570581,
            author: 'David'
        },
        {
            id: 2,
            title: 'title B',
            content: 'content B',
            createTime: 1654430570181,
            author: 'Carson'
        },
        {
            id: 1,
            title: 'title A',
            content: 'content A',
            createTime: 1654430570381,
            author: 'Ben'
        }
    ]
}

const getDetail = (id) => {
    // return fake data, but format is right.
    return {
        id: 2,
        title: 'title B',
        content: 'content B',
        createTime: 1654430570181,
        author: 'Carson'
    }
}

const newBlog = (blogData = {}) => {
    // blogData is a blog object, contains title & content
    console.log('new blog data...', blogData);
    return {
        id: 3 // The id which return after inserting the data 
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('update blog', blogData);
    return true
}

const deleteBlog = (id) => {
    console.log('delete blog');
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}