"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const ToastProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
          },
        }}
      />
    </>
  )
}
