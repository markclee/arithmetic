// vue的类.用于创建vue实例
 class Vue {
     constructor(options = {}){
        //  options = options || {}
         this.$el = options.el
         this.$data = options.data
         this.$methods = options.$methods

        //  监视data中的数据
        new Observer(this.$data)
        


        //  如果指定了el参数,对el进行解析
         if(this.$el){
            //  compile 负责解析 模板内容
            // 需求: 模板 数据  把整个Vue实例传过去
            let c = new Compile(this.$el, this)
            console.log(c)
         }
     }
 }