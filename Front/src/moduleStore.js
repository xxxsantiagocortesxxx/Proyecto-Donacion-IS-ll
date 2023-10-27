import { create } from "zustand";

export const useModuleStore = create((set) => ({
    count : 0,
    valor : (value)=>{
        set(state=>({
            count: value
        }))
    },

}));
