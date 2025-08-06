
export const triggerCustomEvent = (args) => {
    // 创建自定义事件对象
    const event = new CustomEvent("myMessage", {
        detail:args
    });
    // 触发自定义事件
    window.dispatchEvent(event);
}

export const iajax = (params, cb) => {
    const event= e => {
        cb({ name: "响应", ...params,...e.detail })
        console.log(e.detail,params.key);
        
        if(e.detail.key===params.key){
            window.removeEventListener("myMessage",event)
        }
    }

    window.addEventListener("myMessage",event)
}

export const rsd = (params) => new Promise(resolve => {
    iajax(params, r => {
        resolve(r)
    })
})