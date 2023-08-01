import { useProModal } from '@/hooks/use-pro-modal';
import React from 'react';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const proModal = useProModal();
  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium">Sign in to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-800"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-brand-orange 
          focus:border-brand-orange w-full p-2.5 border-gray-400 placeholder-gray-600 text-black"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-800"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-brand-orange 
          focus:border-brand-orange w-full p-2.5 border-gray-400 placeholder-gray-600 text-black"
          placeholder="********"
        />
      </div>
      <button className="flex w-full justify-end">
        <a
          href="#"
          className="text-sm block text-gray-700 hover:underline w-full text-right -mt-4"
        >
          Forgot Password?
        </a>
      </button>
      <button
        type="submit"
        onClick={proModal.onClose}
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg bg-brand-orange py-2.5 text-center hover:bg-brand-orange-s transition-all duration-300 ease-in-out"
      >
        Sign In
      </button>
      <div className="text-sm font-medium text-gray-500">
        Not Registerd?{' '}
        <a href="#" className="text-blue-700 hover:underline">
          Create Account
        </a>
      </div>
    </form>
  );
};
export default Login;
