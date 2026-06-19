import CompanyTable from '@/Component/DashboardComponent/CompanyTable';
import { getAdminCompany } from '@/lib/api/recruter-company';
import React from 'react';
import { TbChevronsDownLeft } from 'react-icons/tb';

const CompanyPage = async() => {
    const companies = await getAdminCompany()
    // console.log(companies,'this is admin companies ')
    return (
       <div className="min-h-screen bg-[#0d0d0f] p-8 text-neutral-100">
            <div className="max-w-7xl mx-auto space-y-6">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight text-neutral-200">
                        Companies for review
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1">
                        Total items submitted: {companies.length}
                    </p>
                </div>
                
                <CompanyTable companies={companies} />
            </div>
        </div>
    );
};

export default CompanyPage;