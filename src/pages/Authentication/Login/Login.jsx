import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const { signIn, singInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            await signIn(email, password); // useAuth থেকে আসছে
            toast.success("Login Successful!");
            navigate("/");
        } catch (error) {
            toast.error("Login failed. Please check your credentials.");
        }
    };
    const handleGoogleLogin = async () => {
        try {
            await singInWithGoogle();
            toast.success("Google Login Successful! 🎉");
            navigate(from, { replace: true });
        } catch (error) {
            console.error("Google Login Error:", error.message);
            toast.error("Google Login failed. Please try again.");
        }
    };

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md mx-auto rounded-2xl p-6 sm:p-8"
                noValidate
            >
                {/* Title */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                    Welcome Back
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-2">
                    Login with Profast
                </p>

                {/* Email */}
                <label className="block text-sm font-semibold text-black mt-6 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                        },
                    })}
                    className={`w-full rounded-lg border px-4 py-2.5 outline-none focus:ring-2 transition bg-white
                        ${errors.email
                            ? "border-red-500 focus:ring-red-300"
                            : "border-gray-200 focus:ring-lime-400"
                        }`}
                />
                {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                    </p>
                )}

                {/* Password */}
                <label className="block text-sm font-semibold text-black mt-4 mb-1">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                    className={`w-full rounded-lg border px-4 py-2.5 outline-none focus:ring-2 transition bg-white
                        ${errors.password
                            ? "border-red-500 focus:ring-red-300"
                            : "border-gray-200 focus:ring-lime-400"
                        }`}
                />
                {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.password.message}
                    </p>
                )}

                {/* Forgot Password */}
                <div className="mt-2 text-right">
                    <button
                        type="button"
                        className="text-xs sm:text-sm text-gray-400 hover:underline"
                    >
                        Forget Password?
                    </button>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-5 w-full rounded-lg bg-lime-300 py-2.5 text-sm sm:text-base font-semibold text-black hover:bg-lime-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>

                {/* Register */}
                <p className="mt-4 text-center text-xs sm:text-sm text-gray-400">
                    Don't have any account?{" "}
                    <Link to='/register' className="cursor-pointer text-lime-500 font-medium hover:underline">
                        Register
                    </Link>
                </p>

                {/* Divider */}
                <div className="my-6 flex items-center gap-3">
                    <div className="h-px w-full bg-gray-200"></div>
                    <span className="text-xs sm:text-sm text-gray-400">Or</span>
                    <div className="h-px w-full bg-gray-200"></div>
                </div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin} // এখানে ফাংশনটি কল করুন
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 py-2.5 text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                    <FcGoogle size={22} />
                    Login with Google
                </button>
            </form>
        </div>
    );
};

export default Login;
