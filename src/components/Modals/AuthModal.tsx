'use client';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import Login from './Login';
import { Drawer } from 'vaul';
import { useProModal } from '@/hooks/use-pro-modal';
import Signup from './Signup';
import ResetPassword from './ResetPassword';

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const proModal = useProModal();
  return (
    <Drawer.Root open={proModal.isOpen}>
      <Drawer.Trigger asChild>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <ResetPassword />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
export default AuthModal;
