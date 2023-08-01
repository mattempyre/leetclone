import { useProModal } from '@/hooks/use-pro-modal';
import React from 'react';

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const proModal = useProModal();
  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium">Register to LeetClone</h3>
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
      focus:border-brand-orange w-full p-2.5 border-gray-600 placeholder-gray-400 text-slate-900 "
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="username"
          className="text-sm font-medium block mb-2 text-gray-800"
        >
          Username
        </label>
        <input
          type="username"
          name="username"
          id="username"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-brand-orange 
      focus:border-brand-orange w-full p-2.5 border-gray-600 placeholder-gray-400 text-slate-900 "
          placeholder="John Doe"
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
      focus:border-brand-orange w-full p-2.5 border-gray-600 placeholder-gray-400 text-slate-900 "
          placeholder="********"
        />
      </div>

      <button
        type="submit"
        onClick={proModal.onClose}
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg bg-brand-orange py-2.5 text-center hover:bg-brand-orange-s transition-all duration-300 ease-in-out"
      >
        Register
      </button>
      <div className="text-sm font-medium text-gray-500">
        Already have an account?{' '}
        <a href="#" className="text-blue-700 hover:underline">
          Sign in
        </a>
      </div>
    </form>
  );
};
export default Signup;
