const dbutil = require('./DBUtil')


const insertTag = (tag, ctime, utime, success) => {
  let sql = 'insert into tags (`tag`, `ctime`, `utime`) values (?,?,?)',
      params = [tag, ctime, utime]
  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else console.log(err)
  })
  connection.end()
}


const queryTag = (tag, success) => {
  let sql = 'sleect * from tags where tag = ?',
      params = [tag]
  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err) success(result)
    else throw new Error(err)
  })
  connection.end()
}


module.exports = {
  queryTag,
  insertTag
}