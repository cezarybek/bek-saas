"use client";

import { signOut } from "next-auth/react";

signOut;

const ButtonLogout = ({}) => {
  return (
    <button className="btn btn-ghost" onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default ButtonLogout;
