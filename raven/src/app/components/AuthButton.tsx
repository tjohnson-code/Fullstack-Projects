"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthButton() {
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <div className="flex gap-5">
        <button onClick={handleSignIn}>Login</button>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </>
  );
}
