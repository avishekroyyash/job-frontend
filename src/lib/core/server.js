

export const serverFetch = async(path)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`)
        const data = await res.json()
        // console.log(data,'this is serverfetch data ')
       return data
}


export const serverMutation = async(path,data,method='POST')=>{
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,{
    method:method,
    headers:{
        'content-type' : 'application/json'
    },
    body: JSON.stringify(data)
 })
 const jobData = await res.json()
 return jobData ;
}