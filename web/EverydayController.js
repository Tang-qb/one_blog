const everyDao = require('../dao/EveryDayDao')
const time = require('../util/Timeutil')
const resUtil = require('../util/ResUtil')

const path = new Map()

const editEveryDay = (req, res) => {
  req.on('data', (data) => {
    everyDao.insertEveryDay(data.toString().trim(), time.getNow(), result => {
      res.writeHead(200)
      res.write(resUtil.writeResult('success', '添加成功', null))
      res.end()
    })
  })
}

path.set('/editEveryDay', editEveryDay)


module.exports.path = path