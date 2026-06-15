import { getCompanyJobById } from '@/lib/api/recruter-jobs';
import { getUserSession } from '@/lib/core/session';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';
import { getApplicationByApplicant } from '@/lib/api/applications';
import { ShieldExclamation, CircleInfo, Rocket } from '@gravity-ui/icons';
import { getPlanById } from '@/lib/api/plan';
import { TbChevronsDownLeft } from 'react-icons/tb';

const JobApplyPage = async ({ params }) => {
    const { id } = await params;

    const user = await getUserSession();

    if (!user) {
        redirect(`/login?redirect=/jobs/${id}/apply`);
    }

    if (user.role !== 'seeker') {
        return (
            <div className="w-full min-h-[80vh] flex flex-col justify-center items-center p-6">
                <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldExclamation className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                        Access Restricted
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Only job seekers can apply for jobs. Please login with a
                        seeker account to continue.
                    </p>

                    <Link
                        href="/"
                        className="inline-block w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }

    const job = await getCompanyJobById(id);
    const application = await getApplicationByApplicant(user?.id);
    
    const plan = await getPlanById(user?.plan || 'seeker_free' )
   // console.log(plan,'this is user plan of application page ')
  

    const applicationCount = application?.length || 0;

    const hasReachedLimit =
        applicationCount >= plan.maxApplicationPerMonth;

    const usagePercentage = Math.min(
        (applicationCount / plan.maxApplicationPerMonth) * 100,
        100
    );

    return (
        <div className="min-h-screen bg-zinc-950 text-white py-10 px-4">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Usage Card */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                                Monthly Application Status
                            </span>

                            <h2 className="text-lg font-bold mt-1">
                                Applied to{' '}
                                <span className="text-blue-400">
                                    {applicationCount}
                                </span>{' '}
                                out of{' '}
                                <span className="text-zinc-400">
                                    {plan.maxApplicationPerMonth}
                                </span>{' '}
                                jobs
                            </h2>
                        </div>

                        <span className="px-3 py-1 rounded-full text-xs bg-zinc-800 border border-zinc-700">
                            Plan:{" "}
                            <strong className="text-white">
                                {plan.name}
                            </strong>
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden mb-5">
                        <div
                            className={`h-full transition-all duration-500 ${
                                hasReachedLimit
                                    ? 'bg-red-500'
                                    : usagePercentage > 66
                                    ? 'bg-amber-500'
                                    : 'bg-blue-500'
                            }`}
                            style={{
                                width: `${usagePercentage}%`,
                            }}
                        />
                    </div>

                    {/* Upgrade Card */}
                    <div className="flex items-start gap-3 bg-blue-950/30 border border-blue-900/50 rounded-xl p-4">
                        <Rocket className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />

                        <div className="flex-1 md:flex md:items-center md:justify-between gap-4">
                            <p className="text-sm text-blue-300">
                                Need more applications? Upgrade your plan and
                                apply to more jobs without limits.
                            </p>

                            <Link
                                href="/plan"
                                className="inline-block mt-3 md:mt-0 px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 rounded-lg transition"
                            >
                                View Plans
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Application Section */}
                {hasReachedLimit ? (
                    <div className="bg-zinc-900 border border-dashed border-zinc-700 rounded-2xl p-8 text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-zinc-800 rounded-full flex items-center justify-center">
                            <CircleInfo className="w-5 h-5 text-zinc-400" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2">
                            Application Limit Reached
                        </h3>

                        <p className="text-zinc-400 max-w-md mx-auto">
                            You have used all available applications for your
                            current plan. Upgrade your plan to continue applying
                            for jobs.
                        </p>
                    </div>
                ) : (
                    <div className="animate-in fade-in-50 duration-300">
                        <JobApply applicant={user} job={job} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobApplyPage;