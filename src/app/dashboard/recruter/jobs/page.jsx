import { getJobById } from '@/lib/api/recruter-jobs';
import React from 'react';
import { Table, Chip, Button, Tooltip } from "@heroui/react";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { getLoggedInRecruterCompany } from '@/lib/api/recruter-company';

const RecruterJobsTable =async() => {
    // const companyId= 'company_123'
    const company = await getLoggedInRecruterCompany()
    // console.log(company,'this is company of recrtuter table ')
     const allJobs = await getJobById(company._id)
    ///console.log(allJobs)
     const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "success";
      case "inactive":
        return "danger";
      default:
        return "warning";
    }
  };
    return (
         <div className="mx-auto max-w-7xl space-y-4 p-4 md:p-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Manage All Jobs
        </h2>

        <p className="text-sm text-default-500">
          View, update, and manage your current job postings.
        </p>
      </div>

      {/* Table */}
     <div className="overflow-x-auto rounded-xl border border-default-200">
  <table className="w-full min-w-[800px]">
    <thead>
      <tr className="border-b border-default-200">
        <th className="p-4 text-left">JOB TITLE</th>
        <th className="p-4 text-left">TYPE / CATEGORY</th>
        <th className="p-4 text-left">LOCATION</th>
        <th className="p-4 text-left">STATUS</th>
        <th className="p-4 text-left">ACTIONS</th>
      </tr>
    </thead>

    <tbody>
      {allJobs?.map((job) => (
        <tr
          key={job._id}
          className="border-b border-default-100"
        >
          <td className="p-4 font-medium">
            {job.jobTitle}
          </td>

          <td className="p-4">
            <div className="flex flex-col">
              <span>{job.jobType}</span>
              <span className="text-xs text-default-500">
                {job.jobCategory}
              </span>
            </div>
          </td>

          <td className="p-4">
            {job.isRemote ? "Remote" : job.location}
          </td>

          <td className="p-4">
            <Chip
              color={getStatusColor(job.status)}
              size="sm"
              variant="flat"
            >
              {job.status}
            </Chip>
          </td>

          <td className="p-4">
            <div className="flex gap-2">
              <Button isIconOnly size="sm" variant="light">
                <FiEye />
              </Button>

              <Button isIconOnly size="sm" variant="light">
                <FiEdit2 />
              </Button>

              <Button
                isIconOnly
                size="sm"
                variant="light"
                color="danger"
              >
                <FiTrash2 />
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
    );
};

export default RecruterJobsTable;