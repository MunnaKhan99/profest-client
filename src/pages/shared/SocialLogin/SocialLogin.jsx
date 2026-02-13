import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const SocialLogin = () => {
    const { singInWithGoogle } = useAuth();
    const handleGoogleSignIn = () => {
        singInWithGoogle().
            then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-100 py-2 font-medium text-gray-800 hover:bg-gray-200 transition"
            >
                <FcGoogle size={20} />
                Register with google
            </button>
        </div>
    );
};

export default SocialLogin;