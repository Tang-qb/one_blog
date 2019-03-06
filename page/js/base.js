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