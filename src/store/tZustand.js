// import { create } from "zustand";
import { icreate as create } from "../plugins/IZustand";

const logMiddle=func=>{
    return function(set,get,store){
        function logSet(args){
            console.log("使用logSet",args);
            set(args)
        }

        return func(logSet,get,store)
    }
}

export const useChart=create(logMiddle((set,get,store)=>{
    return {
        name:"名字",
        age:12,
        upName:val=>set(()=>({name:val})),
        upAge:val=>set(()=>({age:val}))
    }
}))

