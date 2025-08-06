export const jsBaseMain = () => {
    console.log("jsBaseMain");

}

function inew(target, ...args) {
    const obj = Object.create(target.prototype)

    const res = target.apply(obj, args)

    if (typeof res === "object" && typeof res !== null) {
        return res
    }
    return obj
}

function deepClone(target, imap = new weakMap()) {
    if (target == null || typeof target !== "object") return target

    if (imap.has(target)) {
        return imap.get(target)
    }

    let res

    imap.set(target, res)

    if (Object.prototype.toString(target) == "[object Array]") {
        res = []
        target.map((item, i) => {
            res[i] = deepClone(item)
        })
    }
    if (Object.prototype.toString(target) == "[object Object]") {
        res = {}
        Object.keys(target).map(key => {
            res[key] = deepClone(target[key])
        })
    }


    return res
}

function ithrottle() {

}

function debounce() {

}

// new Promise((resolve,reject)=>{
//     resolve()
// }).then(()=>{

// }).catch(()=>{

// })

class Ipromise {
    constructor(execute) {
        this.status = "pending"
        this.fullfiledHandle = []
        this.rejectedHandle = []
        this.value
        this.reason

        function resolve(value) {
            if (this.status === "pending") {
                this.status === "fullfiled"
                this.value = value
                this.fullfiledHandle.map(fn => fn(value))
            }
        }

        function reject(reason) {
            if (this.status === "pending") {
                this.status === "rejected"
                this.reason = reason
                this.rejectedHandle.map(fn => fn(reason))
            }
        }

        if (execute) {
            execute(resolve, reject)
        }
    }

    then(rs, rj) {
        // 判断cb是不是Promise，不是就包装一下
        const rscb = typeof rs === "function" ? rs : (rs => rs)

        const newPromise = new Promise((resolve, reject) => {
            const rshandle = () => {
                const x = rscb(this.value)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            }

            if(this.status==="pending"){
                this.fullfiledHandle.push(()=>setTimeout(() => rshandle, 0))
            }
            
            if(this.status==="fullfiled"){
                setTimeout(() => rshandle(), 0);
            }
        })

        return newPromise
    }


}

function resolvePromise(promise, x, resolve, reject) {
    // 避免循环引用
    if (promise === x) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
    if (x instanceof MyPromise) {
        // 如果 x 是 MyPromise 实例，根据其状态处理
        x.then(resolve, reject);
    } else {
        // 普通值直接 resolve
        resolve(x);
    }
}