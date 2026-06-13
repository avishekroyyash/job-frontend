import { serverFetch } from "../core/server"
import { getUserSession } from "../core/session"

export const getRecruterCompany = (recruiterId)=>{
    // console.log(recruiterId,'this is reqruter id from recruter-company.js get')
    return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`)
}

export const getLoggedInRecruterCompany =async ()=>{
    const user = await getUserSession()
    return getRecruterCompany(user?.id)
}