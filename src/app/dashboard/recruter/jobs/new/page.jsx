import React from 'react';
import PostJobForm from './PostJobForm';
import { getUserSession } from '@/lib/core/session';
import { getLoggedInRecruterCompany, getRecruterCompany } from '@/lib/api/recruter-company';

const PostJobPage =async() => {
  
    //  const user = await getUserSession();
    //    const company = await getRecruterCompany(user?.id)
    //     console.log(company)
    const company = await getLoggedInRecruterCompany()
     console.log(company)
    return (
        <div>
            <PostJobForm company={company}></PostJobForm>
        </div>
    );
};

export default PostJobPage;