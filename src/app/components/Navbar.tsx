"use client";

import React, { useState } from "react";
import {signIn} from "../auth/auth"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div>
      <button onClick={signIn}>Login</button>
    </div>
  );
}
