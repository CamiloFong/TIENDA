import React, { useState } from "react";
import { Signin } from "../../components/ui/signin/Signin";
import { Signup } from "../../components/ui/signup/Signup";

export default function Login() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Signup />}
      {!open && <Signin />}
      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Back" : "Sign Up"}
        </button>
      </div>
    </>
  );
}
