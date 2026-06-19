'use server'
import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"



export const createCompanies = async(newCompanydata)=>{
    return  serverMutation('/api/companies',newCompanydata)
}

export const updateCompanyStatus = async(id , data)=>{
  const result = await serverMutation(`/api/companies/${id}`,data,'PATCH')
  revalidatePath('/dashboard/admin/companies')
  return result
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