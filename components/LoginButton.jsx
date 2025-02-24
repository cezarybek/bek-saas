"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginButton = ({ session, extraClass }) => {
  const dashboardUrl = "/dashboard";

  if (session) {
    return (
      <Link href={dashboardUrl} className={`btn btn-primary ${extraClass}`}>
        {session.user.name || "Guest"}
      </Link>
    );
  }
  return (
    <button
      onClick={() => signIn(undefined, { callbackUrl: dashboardUrl })}
      className={`btn btn-primary ${extraClass}`}
    >
      Get Started
    </button>
  );
};

export default LoginButton;
