// 专门负责解析模板内容
class Compile{
    // 参数1 模板
    // 参数2 vue实例
    constructor (el, vm){
        // el----new vue时候传入的选择器
        this.el = typeof el == 'string' ? document.querySelector(el) : el
        // vm-----new vue的实例
        this.vm = vm
        // 编译模板 视图容器
        if(this.el){
            console.log(123)
            // 1:把el中所有的子节点,都放入到内存中,fragment(内存中)
            let fragment = this.node2fragment(this.el)
            // 2:在内存中编译 fragment  把差值表达式,节点进行解析
            this.compile(fragment)

            // 3:把fragment 一次性 添加到页面  (文档片段存在内存中, 不在dom树上)
            this.el.appendChild(fragment)

        }
    }
    // 核心方法
    node2fragment(node){
        let fragment = document.createDocumentFragment();
        // 把el中所有的子节点,挨个添加到文档碎片中
        let childNodes = node.childNodes
        // 
        this.toArray(childNodes).forEach(node=>{
            // 把我们的所有子节点,都添加到fragment中
            fragment.appendChild(node)
        })
        return fragment
    }

    /*
        在内容中编译文档碎片
    */
    compile(fragment){
        let childNodes = fragment.childNodes
        this.toArray(childNodes).forEach(node=>{
            // 编译子节点

            // 如果是元素, 需要解析指令
            if(this.isElementNodes(node)){
                this.compileElement(node)
            }
            // 如果是文本, 解析里边的差值表达式
            if(this.isTextNodes(node)){
                this.CompileText(node)
            }
            // 节点中嵌套节点,需要递归解析
            if(node.childNodes && node.childNodes.length > 0){
                this.compile(node)
            }
        })
    }
    // 解析html标签的
    // 拿到标签里边的指令
    compileElement(node){
        // 1:获取到当前节点下 所有的属性
        let attributes = node.attributes
        this.toArray(attributes).forEach(attr => {
             // 2:解析vue的指令,所有以v-开头的指令
             let attrName = attr.name
             
            if(this.isDirective(attrName)){
                // 拿到指令的类型
                let attrValue = attr.value
                let type = attrName.slice(2)
                // 如果是v-text
                // if(type === 'text'){
                //     node.textContent = this.vm.$data[attrValue]
                // }
                // if(type === 'html'){
                //     node.textContent = this.vm.$data[attrValue]
                // }
                // if(type === 'model'){
                //     node.value = this.vm.$data[attrValue]
                // }
                // // 解析v-on指令
                // if(isEventDirective(type)){
                //     // 给当前元素注册事件
                //     //  -拿到事件类型
                //     let eventType = type.split(":")[1]
                //     // 修改this指向,将this指向vue实例
                //     node.addEventListener(eventType, this.vm.$methods[attrValue].bind(this.vm))
                // }
                // 解析v-on指令
                if(this.isEventDirective(type)){
                    CompileUtil['eventHandler'](node, this.vm, type, expr)
                }else {
                    CompileUtil[type] && CompileUtil[type](node, this.vm, expr)
                }
            }
        })
       
        console.log('解析标签')
    }
    // 解析文本节点
    CompileText(node){
        let txt = node.textContent
        // 任意字符,一个以上
        // 正则表达式分组,$1 拿到第一个分组里边的内容
        // $2拿到第二个分组中的内容
        let reg = /\{\{(.+)\}\}/
        if(reg.test(txt)){
            let expr  = RegExp,$1
            node.textContent = txt.replace(reg, CompileUtil.getVMValue(this.vm, expr))
        }
    }

    // 工具方法
    toArray(likeArray){
        return [].slice.call(likeArray)
    }
    isElementNodes(node){
        // Node type 1元素节点 3文本节点
       return node.nodeType === 1
    }
    isTextNodes(node){
        return node.nodeType === 3
    }
    isDirective(attrName){
        return attrName.startWith('v-')
    }
    // 解析v-on指令
    isEventDirective(type){
        return type.split(':')[0] === 'on'
    }
}

// 处理除 v-on指令
let CompileUtil = {
    // 小胡子语法
    // mustache(){

    // },
    // 处理v-text指令
    text(node, vm, expr) {
        // node.textContent = vm.$data[expr]
        node.textContent = this.getVMValue(vm, expr)
    },
    // 处理v-html指令
    html(node, vm, expr) {
        node.innerHTML = vm.$data[expr]
    },
    // 处理v-model指令
    model(node, vm, expr){
        node.value = vm.$data[expr]
    },
    eventHander(node, vm, type, expr){
        // 给当前元素注册事件即可
        let eventType = type.split(':')[1]
        // 
        let fn = vm.$methods && vm.$methods[expr]
        if(eventType  && fn){
            // 发布订阅模式
            node.addEventListener(eventType, fn.bind(vm))
        }
    },
    // 这个方法用于获取vm中的数据
    getVMValue(vm, expr){
        // 获取到data中的数据
        let data = vm.$data
        expr.split('.').forEach(key=>{
            data = data[key]
        })
        return data
    }
}
// 处理v-on指令


