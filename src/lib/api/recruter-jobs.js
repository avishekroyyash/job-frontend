import { serverFetch } from "../core/server"

export const getJobs = async()=>{
    return serverFetch('/api/jobs')
}

export const getCompanyJobById = (jobId)=>{
    return serverFetch(`/api/jobs/${jobId}`)
}

export const getJobById =async (cmpid,status='active')=>{
    // console.log(cmpid,'this is getjobbyid function ')
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/jobs?
companyId=${cmpid}&status=${status}`)
const Data = await res.json()
return Data 
}