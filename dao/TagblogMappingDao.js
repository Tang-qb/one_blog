const dbutil = require('./DBUtil')

const insertTagBlog = (tagId, blogId, ctime, utime, success) => {
  let sql = 'insert into tag_blog_mapping (`tag_id`, `blog_id`, `ctime`, `utime`) values (?, ?, ?, ?)'
  let params = [tagId, blogId, ctime, utime]
  let connection = dbutil.createConnection()

  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else console.log(err)
  })
  connection.end()
}


module.exports = {
  insertTagBlog
}
