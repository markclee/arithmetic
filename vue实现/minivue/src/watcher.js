// 观察者,负责联系observer与compile关联起来
class Watcher {
    constructor(vm, expr, cb) {
        // vm 当前vue的实例
        // expr data中数据的名字
        // 一旦数据发生了改变,调用cb
        this.vm = vm
        this.expr = this.expr
        this.cb = cb

        // 需要把expr的旧值给存储起来
        // 用于旧值 与 新值 比较 是否发生了改变
        this.oldValue = this.getVMValue(vm, expr)
    }
    // 对外暴露的方法,用于更新页面
    update(){
        // 对比 expr 是否发生了改变,如果发生了改变,调用cb
        let oldValue = this.oldValue
        let newValue = this.getVMValue(this.vm, this.expr)
        if(oldvalue != newValue){
            this.cb(newValue, oldValue)
        }
    }
    // 用于获取data中的数据 
    getVMValue(vm, expr){
        //获取data中的数据
        expr.split('.').forEach(key=>{
            data = data[key]
        })
        return data
    }
}