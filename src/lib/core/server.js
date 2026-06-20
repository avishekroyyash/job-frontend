import { redirect } from "next/navigation";
import { getUserToken } from "./session";



export const authHeaders = async()=>{
    const token = await getUserToken()
    const header = token ? {
        authorization : `Bearer ${token}`
    } : {} ;
    return header;
}

export const serverFetch = async(path)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`)
        const data = await res.json()
        // console.log(data,'this is serverfetch data ')
       return data
}

export const protectedFetch = async(path)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,{
        headers :  await authHeaders()
    })
    //handle status 401

    return handleStatusCode(res)
}

export const serverMutation = async(path,data,method='POST')=>{
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,{
    method:method,
    headers:{
        'content-type' : 'application/json',
        ...await authHeaders()
    },
    body: JSON.stringify(data)
 })
 


 return handleStatusCode(res) ;
}



//cheack 401,403,404
const handleStatusCode = res =>{
if(res.status === 401){
    redirect('/login')
}
else if(res.status ===403){
    redirect('/unauthorized')
}
return res.json()
}