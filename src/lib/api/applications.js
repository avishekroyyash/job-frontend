import { protectedFetch, serverFetch } from "../core/server"

export const getApplicationByApplicant =(applicantId)=>{
    //console.log(applicantId,'this is applicationid from getapplicationByApplicant in application js')
    return protectedFetch(`/api/applications?applicantId=${applicantId}`)
}