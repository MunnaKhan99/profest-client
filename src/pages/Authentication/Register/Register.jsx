import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const { createUser } = useAuth()

    const onSubmit = async (data) => {
        console.log(data);
        createUser(data?.email, data.password);

        // এখানে API call / Firebase auth logic বসাবে
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-sm text-white"
                noValidate
            >
                {/* Title */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                    Create an Account
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-2">
                    Register with Profast
                </p>
                {/* Name */}
                <label className="block text-black font-bold text-sm mb-1">Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                        },
                    })}
                    className={`w-full mb-1 rounded-md bg-white px-4 py-2 text-black outline-none ${errors.name ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-lime-400"
                        }`}
                />
                {errors.name && (
                    <p className="mb-3 text-xs text-red-400">{errors.name.message}</p>
                )}

                {/* Email */}
                <label className="block font-bold text-sm mb-1 text-black">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email",
                        },
                    })}
                    className={`w-full mb-1 rounded-md bg-white px-4 py-2 text-black outline-none ${errors.email
                        ? "ring-2 ring-red-500"
                        : "focus:ring-2 focus:ring-lime-400"
                        }`}
                />
                {errors.email && (
                    <p className="mb-3 text-xs text-red-400">{errors.email.message}</p>
                )}

                {/* Password */}
                <label className="block font-bold  text-sm mb-1 text-black">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                    className={`w-full mb-1 rounded-md bg-white px-4 py-2 text-black outline-none ${errors.password
                        ? "ring-2 ring-red-500"
                        : "focus:ring-2 focus:ring-lime-400"
                        }`}
                />
                {errors.password && (
                    <p className="mb-4 text-xs text-red-400">
                        {errors.password.message}
                    </p>
                )}

                {/* Register Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md bg-lime-300 py-2 font-semibold text-black hover:bg-lime-400 transition disabled:opacity-60"
                >
                    {isSubmitting ? "Registering..." : "Register"}
                </button>

                {/* Login Link */}
                <p className="mt-3 text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link to='/login' className="cursor-pointer text-lime-400 hover:underline">
                        Login
                    </Link>
                </p>

                {/* Divider */}
                <div className="my-5 flex items-center gap-3">
                    <div className="h-px w-full bg-gray-700" />
                    <span className="text-xs text-gray-400">Or</span>
                    <div className="h-px w-full bg-gray-700" />
                </div>

                {/* Google Register */}
                <div>
                    <SocialLogin />
                </div>
            </form>
        </div>
    );
};

export default Register;
