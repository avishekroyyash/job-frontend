import { serverMutation } from "../core/server"


export const createSubscription =async (subInfo)=>{
    console.log(subInfo,'this is subinfo from subscription ');
return serverMutation('/api/subscription',subInfo)
}