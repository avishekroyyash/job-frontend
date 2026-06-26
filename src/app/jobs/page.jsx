
import JobListingContainer from "@/Component/job/JobListingContainer";
import { getJobs } from "@/lib/api/recruter-jobs";



export default async function Page({searchParams}) {
 
  
  const filters = await searchParams
 // console.log(filter,'this is searchparmars of server side ');
 const filterObj = {
  ...filters ,
  isRemote : filters.isRemote === 'true' ? true : false
 }
 //console.log(filterObj,'this is searchparmars of server side ');
 const querySearch = new URLSearchParams(filters)
//console.log(querySearch,'this is querysearch of server side ');
 const queryString = querySearch.toString()
 //console.log(queryString,'this is querysearch conver to string of server side ');



  // Fetched server-side on the initial request
  const {jobs,total} = await getJobs(queryString);


  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Open Positions</h1>
        <p className="text-zinc-400 mt-2">Discover your next engineering challenge.</p>
      </div>

      {/* Pass data to the Client Wrapper to handle filtering interactivity */}
      <JobListingContainer filters={filterObj} jobs={jobs || []} total={total} />
    </div>
  );
}