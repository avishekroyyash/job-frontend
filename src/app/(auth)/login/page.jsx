"use client";

import React, { useState } from "react";
import { Button, Card, Input } from "@heroui/react";
import Link from "next/link";
import {
    FaGoogle,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()



    //after login redirect to apply company page
    const searchParams = useSearchParams();
    // console.log(searchParams,'this is search params form login page');
    const redirectTo = searchParams.get('redirect') || '/'
    //  console.log(redirectTo,'this is from login page redirect to ')


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const loginData = {
            email: form.email.value,
            password: form.password.value,
             
        };

        // console.log(loginData);

        const { data, error } = await authClient.signIn.email({
    email: loginData.email, // required
    password: loginData.password, // required
    rememberMe: true,
  
});
//  console.log("DATA",data)
//  console.log("ERROR",error)
 if(!error){
    toast.success('User Login Successfully')
     router.push(redirectTo)
 }
        // Send data to backend
        // const res = await fetch("/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(loginData),
        // });
    };

    const handleGoogleLogin = () => {
        console.log("Google Login");
    };

    return (
        <section className="min-h-screen bg-linear-to-br from-black via-slate-950 to-blue-950 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side */}
                <div className="hidden lg:block">
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium text-sm">
                        Welcome Back 👋
                    </span>

                    <h1 className="mt-6 text-6xl font-bold leading-tight text-white">
                        Sign In To
                        <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Your Account
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-slate-300 max-w-lg">
                        Access your dashboard, manage your account, and continue your work
                        seamlessly from anywhere.
                    </p>

                    <div className="mt-10 space-y-5">
                        <div className="flex items-center gap-4">
                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                            <p className="text-slate-200">
                                Secure Authentication & Encryption
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                            <p className="text-slate-200">
                                Continue with Google Authentication
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                            <p className="text-slate-200">
                                Access From Any Device
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-12">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h3 className="text-2xl font-bold text-white">10K+</h3>
                            <p className="text-slate-400 text-sm">Users</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h3 className="text-2xl font-bold text-white">99.9%</h3>
                            <p className="text-slate-400 text-sm">Uptime</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h3 className="text-2xl font-bold text-white">24/7</h3>
                            <p className="text-slate-400 text-sm">Support</p>
                        </div>
                    </div>
                </div>

                {/* Login Card */}
                <Card className="w-full max-w-lg mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(59,130,246,0.2)]">
                    <div className="p-8 md:p-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                <FaLock className="text-blue-400 text-xl" />
                            </div>

                            <h2 className="text-3xl font-bold text-white">
                                Login Account
                            </h2>

                            <p className="mt-2 text-slate-400">
                                Enter your credentials to access your account.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                            {/* Email */}
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />

                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Enter you Email"
                                    className="pl-10 w-full"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />

                                <Input
                                    name="password"
                                    placeholder="Enter your password"
                                    type={showPassword ? "text" : "password"}
                                    className="pl-10 w-full"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className="flex justify-end">
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-blue-400 hover:text-blue-300"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all duration-300"
                            >
                                Login
                            </Button>

                        </form>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="border-t border-white/10"></div>

                            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-950 px-4 text-sm text-slate-400">
                                OR CONTINUE WITH
                            </span>
                        </div>

                        {/* Google Login */}
                        <Button
                            variant="bordered"
                            size="lg"
                            className="w-full border border-white/10 bg-white/5 text-white hover:bg-white/10 font-medium"
                            onClick={handleGoogleLogin}
                        >
                            <FaGoogle className="text-red-500 text-lg" />
                            Continue with Google
                        </Button>

                        {/* Footer */}
                        <p className="text-center text-sm text-slate-400 mt-8">
                            Don't have an account?
                            <Link
                                href={`/resister?redirect=${redirectTo}`}
                                className="ml-2 text-blue-400 font-semibold hover:text-blue-300"
                            >
                                Create Account
                            </Link>
                        </p>

                        <p className="text-center text-xs text-slate-500 mt-4">
                            Protected by secure authentication and industry-standard
                            encryption.
                        </p>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default LoginPage;