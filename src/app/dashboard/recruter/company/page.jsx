import React from 'react';
import CompanyProfile from './Companyprofile';
import { getUserSession } from '@/lib/core/session';
import { getRecruterCompany } from '@/lib/api/recruter-company';

const CompanyPage =async () => {
    const user = await getUserSession();
    // console.log(user,'this is user from companypage');
   const company = await getRecruterCompany(user?.id)
//    console.log(company,'this is company from company page')
    return (
        <div>
            <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
        </div>
    );
};

export default CompanyPage;