import { createSubscription } from '@/lib/actions/subscription';
import { stripe } from '@/lib/stripe';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error('Please provide a valid session_id');
  }

  const {
    status,
    customer_details: { email: customerEmail },
    metadata ,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent'],
  });

  if (status === 'open') {
    redirect('/');
  }

  if (status === 'complete') {
  
    const subsInfo = {
      email: customerEmail,
      planId : metadata.planId,
    }
    const res = await createSubscription(subsInfo)
    console.log(res,'this is result of suceessfull page ');

    return (
      <div className="min-h-screen b-zinc-950 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-xl">

            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <FaCheckCircle className="text-green-500 text-5xl" />
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mt-6">
              <h1 className="text-4xl font-bold text-white">
                Payment Successful
              </h1>

              <p className="mt-3 text-zinc-400">
                Thank you for your purchase. Your payment has been completed
                successfully.
              </p>
            </div>

            {/* Email Information */}
            <div className="mt-8 bg-zinc-800/50 border border-zinc-700 rounded-2xl p-5">
              <p className="text-sm uppercase tracking-wide text-zinc-500">
                Confirmation Email
              </p>

              <p className="mt-3 text-lg font-semibold text-white break-all">
                {customerEmail}
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                A receipt and payment confirmation have been sent to this email
                address.
              </p>
            </div>

            {/* Support */}
            <div className="mt-6 text-center">
              <p className="text-zinc-400 text-sm">
                Need assistance?
              </p>

              <a
                href="mailto:orders@example.com"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                orders@example.com
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/jobs"
                className="text-center bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold"
              >
                Go to Dashboard
              </Link>

              <Link
                href="/"
                className="text-center bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-semibold"
              >
                Back to Home
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return null;
}