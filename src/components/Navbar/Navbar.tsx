import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useProModal } from '@/hooks/use-pro-modal';

type NavbarProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = () => {
  const proModal = useProModal();
  return (
    <div className="flex items-center justify-between sm:px-12 px:2 md:px-24">
      <Link
        href="/"
        className="flex items-center justify-center h-20 w-[180px] relative"
      >
        <Image fill src="/logo.png" alt="LeetClone" className="h-full" />
      </Link>
      <div className="flex items-center">
        <button
          className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-small font-medium flex 
                    items-center justify-center border-2 border-transparent hover:text-brand-orange 
                    hover:bg-white hover:border-2 hover:border-brand-orange transition duration-300 ease-in-out"
          onClick={proModal.onOpen}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
};
export default Navbar;
