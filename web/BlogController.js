const blogDao = require('../dao/BlogDao')
const tagDao = require('../dao/TagsDao')
const tagblogDao = require('../dao/TagblogMappingDao')
const time = require('../util/Timeutil')
const resUtil = require('../util/ResUtil')
const url = require('url')

const path = new Map()

const editBlog = (req, res) => {
  let params = url.parse(req.url, true).query
      tags = params.tags.replace(/ /g, '').replace('，', ',')
  req.on('data', data => {
    blogDao.insertBlog(params.title, data.toString().trim(), tags, 0, time.getNow(), time.getNow(), result => {
      res.writeHead(200)
      res.write(resUtil.writeResult('success', '添加成功', null))
      res.end()
      let blogId = result.insertId,
          tagList = tags.split(','),
          len = tagList.length
      for (let i = 0; i < len; i++) {
        if (tagList[i] == '') continue
        else queryTag(tagList[i], blogId)
      }
    })
  })
}

path.set('/editBlog', editBlog)


const queryTag = (tag, blogId) => {
  tagDao.queryTag(tag, result => {
    if (result == null || result.length == 0) insertTag(tag, blogId)
    else tagblogDao.insertTagBlog(result[0].id, blogId)
  })
}

const insertTag = (tag, blogId) => {
  tagDao.insertTag(tag, time.getNow(), time.getNow(), result => {
    insertTagBlog(result.insertId, blogId, time.getNow(), time.getNow(), result => {})
  })
}


const insertTagBlog = (tagId, blogId) => {
  tagblogDao.insertTagBlog(tagId, blogId, time.getNow(), time.getNow(), result => {})
}


module.exports.path = path