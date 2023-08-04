"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { PulseLoader } from "react-spinners";
import { FaGoogle } from "react-icons/fa";

interface ISlideButtonProps {
  type: "submit" | "reset" | "button";
  text: string;
  disabled: boolean;
}

interface ISocialButtonProps {
  id: string;
  text: string;
  csrfToken: string | undefined;
}

export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};

export const AuthButton: React.FunctionComponent<ISlideButtonProps> = (props) => {

  const { type, text, disabled } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className="relative w-full inline-flex items-center justify-center px-8 py-4 mt-4 overflow-hidden font-medium bg-blue-500 transition duration-300 ease-out border-2 rounded-md group"
    >
      {disabled ? (
        <PulseLoader color="#fff" size={15} />
      ) : (
        <>
          <span className="absolute flex items-center justify-center w-full h-full text-white">
            {text}
          </span>
        </>
      )}
    </button>
  );
};

export const SocialButton: React.FunctionComponent<ISocialButtonProps> = (props) => {
  
  const { id, text, csrfToken } = props;

  return (
    <form method="post" action={`/api/auth/signin/${id}`}>
      <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
      <button
        className="bg-red-500 mb-2 py-2 flex justify-center items-center gap-2 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
        type="button"
        onClick={() => signIn(id)}
      >
        <FaGoogle />
        {text}
      </button>
    </form>
  );
};

