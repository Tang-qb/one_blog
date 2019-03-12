const dbutil = require('./DBUtil')

const insertEveryDay = (content, ctime, success) => {
  let sql = 'insert into every_day (`content`, `ctime`) values (?,?)'
  let params = [content, ctime]
  let connection = dbutil.createConnection()

  connection.connect()
  connection.query(sql, params, (err, res) => {
    if (err == null) success(res)
    else throw new Error(err)
  })
  connection.end()
}

const queryEveryDay = success => {
  let sql = 'select * from every_day order by id desc limit 1'
  let connection = dbutil.createConnection()

  connection.connect()
  connection.query(sql, (err, res) => {
    if (err == null) success(res)
    else throw new Error(err)
  })
  connection.end()
}

module.exports = {
  insertEveryDay,
  queryEveryDay
}