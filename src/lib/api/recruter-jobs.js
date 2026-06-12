import { regex } from "better-auth"

export const getJobById =async (cmpid,status='active')=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/jobs?
companyId=${cmpid}&status=${status}`)
const Data = await res.json()
return Data 
}