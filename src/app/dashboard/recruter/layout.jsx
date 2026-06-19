import { requireRole } from '@/lib/core/session';
import React from 'react';

const RecruterLayout =async ({children}) => {
    await requireRole('recruter')
    return children 
};

export default RecruterLayout;