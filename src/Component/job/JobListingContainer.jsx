"use client";

import React, { useState, useMemo, useEffect } from "react";


import JobCard from "./JobCard";
import JobFilters from "./JobFilters";
import { useRouter } from "next/navigation";
import { Pagination } from "@heroui/react";

export default function JobListingContainer({ jobs,filters,total }) {

  const [searchQuery, setSearchQuery] = useState(filters.search);
  const [selectedType, setSelectedType] = useState(filters.jobType || "all");
  const [selectedCategory, setSelectedCategory] = useState(filters.jobCategory ||"all");
  const [isRemoteOnly, setIsRemoteOnly] = useState(filters.isRemote || false);

 const router = useRouter()
// apply pagination
  const [page, setPage] = useState(filters.page || 1);
  const totalItems = total
  const itemPerPage = 10
   const totalPages = Math.ceil(totalItems/itemPerPage)
 const startItem = (page - 1) * itemPerPage + 1;
const endItem = Math.min(page * itemPerPage, totalItems);


 const getPageNumbers = () => {
    const pages = [];
    pages.push(1);
    if (page > 3) {
      pages.push("ellipsis");
    }
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) {
      pages.push("ellipsis");
    }
    pages.push(totalPages);
    return pages;
  };

  // Compute matched filter rows instantly
   useEffect(()=>{
  const sp = new URLSearchParams()
   if(searchQuery !== 'all'){
    sp.set('search',searchQuery)
  }
  if(selectedType !== 'all'){
    sp.set('jobType',selectedType)
  }
  if(selectedCategory !== 'all'){
    sp.set('jobCategory',selectedCategory)
  }
  if(isRemoteOnly){
    sp.set('isRemote',true)
  }
  if(page){
    sp.set('page',page)
  }
 
  // console.log(sp.toString(),'search parma')
  const path = `?${sp.toString()}`
  router.push(path)
   },[router,selectedType,selectedCategory,isRemoteOnly,searchQuery,page])


  // Compute matched filter rows instantly
  // const jobs = useMemo(() => {
  //   return jobs.filter((job) => {
  //     const matchesSearch =
  //       job.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       job.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       job.requirements?.toLowerCase().includes(searchQuery.toLowerCase());

  //     const matchesType = selectedType === "all" || job.jobType === selectedType;
  //     const matchesCategory = selectedCategory === "all" || job.jobCategory === selectedCategory;
  //     const matchesRemote = !isRemoteOnly || job.isRemote === true;

  //     return matchesSearch && matchesType && matchesCategory && matchesRemote;
  //   });
  // }, [searchQuery, selectedType, selectedCategory, isRemoteOnly, jobs]);

  return (
    <>
      <JobFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isRemoteOnly={isRemoteOnly}
        setIsRemoteOnly={setIsRemoteOnly}
      />

      <div className="max-w-7xl mx-auto mb-6 text-sm text-zinc-500">
        Showing {jobs.length} position{jobs.length !== 1 && "s"}
      </div>

      {jobs.length > 0 ? (
        <>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {jobs.map((jobItem) => (
            <JobCard
              key={jobItem._id?.$oid || jobItem._id} 
              job={jobItem} 
            />
          ))}
        </div>
          <div className="w-full max-w-2xs overflow-x-auto sm:max-w-full">
      <Pagination className="justify-center">
          <Pagination.Summary>
        {startItem} to {endItem} of {totalItems} invoices
      </Pagination.Summary>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>
          {getPageNumbers().map((p, i) =>
            p === "ellipsis" ? (
              <Pagination.Item key={`ellipsis-${i}`}>
                <Pagination.Ellipsis />
              </Pagination.Item>
            ) : (
              <Pagination.Item key={p}>
                <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ),
          )}
          <Pagination.Item>
            <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
              <span>Next</span>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
        </>
      ) : (
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-[32px] max-w-7xl mx-auto">
          <p className="text-zinc-500 text-lg">No positions match your search criteria.</p>
        </div>
      )}
    </>
  );
}