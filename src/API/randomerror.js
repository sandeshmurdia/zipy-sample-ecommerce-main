import { throwerror } from "./api";
export function randomerror(){
        const arr= [200,201,202,400,403,404,406,409,413,429,500,502];
        const randomIndex = Math.floor(Math.random() * arr.length);
        const status = arr[randomIndex];
        return throwerror(status);

}