const dbutil = require('./DBUtil')


const insertBlog = (title, content, tags, views, ctime, utime, success) => {
  let sql = 'insert into blog (`title`, `content`, `tags`, `views`, `ctime`, `utime`) values (?,?,?,?,?,?)',
      params = [title, content, tags, views, ctime, utime]
  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else console.log(err)
  })
  connection.end()
}


module.exports = {
  insertBlog
}