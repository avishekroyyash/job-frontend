import { getApplicationByApplicant } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import React from 'react';
import ApplicationsTable from './ApplicationTable';

const ApplicationPage = async() => {
    const user = await getUserSession()
    const application = await getApplicationByApplicant(user?.id)
    console.log(application,'this is application from application page')
    return (
        <div>
        <ApplicationsTable jobs={application}></ApplicationsTable>
        </div>
    );
};

export default ApplicationPage;