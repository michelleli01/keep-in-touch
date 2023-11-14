"use client";

import React, { useState } from "react";
import { signIn, signOut } from "../auth/auth";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const handleClick = async () => {
    if(isLoggedIn){
      await signOut();
    } else {
      await signIn();
    }

    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleClick}>Sign Out</button>
      ) : (
        <button onClick={handleClick}>Login</button>
      )}
    </div>
  );
}
