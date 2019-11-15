const fs = require('fs')

const blogFilePath = 'db/readfilejson.json'

const loadBlogs = () => {
    // 确保文件有内容，这里就不用处理文件不存在或者内容错误的情况了
    var content = fs.readFileSync(blogFilePath, 'utf8')
    var blogs = JSON.parse(content)
    // console.log('load blogs', blogs)
    return blogs
}

var b = {
    data: loadBlogs(),
}

b.all = function() {
    var blogs = this.data
    return blogs
}

module.exports = b
