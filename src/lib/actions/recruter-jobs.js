
export const createJob = async(newjobdata)=>{
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/jobs`,{
    method:'POST',
    headers:{
        'content-type' : 'application/json'
    },
    body: JSON.stringify(newjobdata)
 })
 const jobData = await res.json()
 return jobData ;
}