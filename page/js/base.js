const randomTags = new Vue({
  el: '#random_tags',
  data: {
    tags: ['dsadas','dsadsadas','bfgfg','rewrw','bfbf','qwqeqwe']
  },
  computed: {
    randomColor(){
      return () => {
        const r = Math.random() * 255 + 50
        const g = Math.random() * 255 + 50
        const b = Math.random() * 255 + 50
        return "rgb(" + r + "," + g + "," + b + ")"
      }
    },
    randomSize(){
        return () => {
          const size =(Math.random() * 20 + 10) + 'px'
          return size
        }
    }
  },
  created() {
    
  },
})


const newHot = new Vue({
  el: '#new_hot',
  data: {
    new_hot: [
      '查看你的AWS服务器已使用流量', 
      'python+selenium自动登录qq空间并下载',
      'vscode+XDebug调试远程环境(虚拟机)',
      'VirtualBox压缩vmdk、vagrant打包b',
      'ubuntu下cmake报错Could NOT fin'
    ]
  },
  
})


const newComments = new Vue({
  el: '#new_comments',
  data: {
    comments: [
        {
          author: '许寒',
          timer: '[13小时前]',
          comment: 'WordPress重复链接过多怎么处'
        },
        {
          author: '许寒',
          timer: '[13小时前]',
          comment: 'WordPress重复链接过多怎么处'
        },
        {
          author: '许寒',
          timer: '[13小时前]',
          comment: 'WordPress重复链接过多怎么处'
        },
        {
          author: '许寒',
          timer: '[13小时前]',
          comment: 'WordPress重复链接过多怎么处'
        },
        {
          author: '许寒',
          timer: '[13小时前]',
          comment: 'WordPress重复链接过多怎么处'
        },
    ]
  }
})


const blogroll = new Vue({
  el: '#blogroll',
  data: {
    blogs: [
      {name:'挨踢茶馆', author: '佛布朗斯基'},
      {name:'挨踢茶馆', author: '佛布朗斯基'},
      {name:'挨踢茶馆', author: '佛布朗斯基'},
      {name:'挨踢茶馆', author: '佛布朗斯基'},
      {name:'挨踢茶馆', author: '佛布朗斯基'},
      {name:'挨踢茶馆', author: '佛布朗斯基'}
    ]
  }
})