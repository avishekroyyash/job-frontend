'use client'
import StatsGrid from '@/Component/DashboardComponent/StatsGrid';
import { useSession } from '@/lib/auth-client';
import React from 'react';
import {
  FiFileText,
  FiUsers,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

 const stats = [
    {
      title: "Total Job Posts",
      value: 48,
      icon: <FiFileText size={22} />,
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: <FiUsers size={22} />,
    },
    {
      title: "Active Jobs",
      value: 18,
      icon: <FiZap size={22} />,
    },
    {
      title: "Jobs Closed",
      value: 32,
      icon: <FiCheckCircle size={22} />,
    },
  ];

const RecruterPage = () => {
    const {data} = useSession()
    const user=data?.user
    // console.log(user);
    return (
         <div className="p-4 md:p-6 lg:p-8">
        <h1>Welcome to Mr {user?.name}</h1>
         <h1 className="mb-6 text-2xl font-bold">
        Recruiter Dashboard
      </h1>

      <StatsGrid stats={stats} />
        </div>
    );
};

export default RecruterPage;