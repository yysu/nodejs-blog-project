const getList = (author, keyword) => {
    // return fake data, which format is right.
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


module.exports = {
    getList: getList,
}