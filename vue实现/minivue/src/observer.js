// 观察,用于给data中的所有数据,添加setter getter
// 方便我们在获取或者设置data中数据的时候，实现我们的 逻辑

class Observer() {
    constructor(data) {
        this.data = data
        this.walk(data)
    }


    //核心方法
    // 遍历data中的所有数据,都添加上setter getter方法
    walk(data) {
        if (!data || typeof data != 'object') {
            return
        }
        // 拿到data中的所有key
        Object.keys(data).forEach(key => {
            // 给data对象的key 设置setter getter
            // 为什么不会出现递归????
            this.defineReactive(data, key, data[key])
            // 如果data[key]是一个复杂数据类型
            // 我们 要递归的添加getter setter
            this.walk(data[key])

        })
    }
    // 定义响应式的数据,数据劫持
    defineReactive(obj, key, value) {
        var that = this
        Object.defineProperty(obj, key, {
            enumerable: 'true',
            configurable: 'true',
            get() {
                return value
            },
            set(newValue) {
                if (value === newValue) {
                    return
                }
                value = newValue
                // 如果new value是一个对象,也应该对其劫持
                that.walk(newValue)
            }
        })
    }
}