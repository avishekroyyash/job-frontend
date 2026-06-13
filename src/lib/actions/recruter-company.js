import { serverMutation } from "../core/server"



export const createCompanies = async(newCompanydata)=>{
    return  serverMutation('/api/companies',newCompanydata)
}

// export const createCompanies = async(newCompanydata)=>{
//  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/companies`,{
//     method:'POST',
//     headers:{
//         'content-type' : 'application/json'
//     },
//     body: JSON.stringify(newCompanydata)
//  })
//  const jobData = await res.json()
//  return jobData ;
// }