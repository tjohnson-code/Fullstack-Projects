import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButton from "@/app/components/AuthButton";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: quoths } = await supabase.from("quoths").select();

  return (
    <>
      <AuthButton />
      <pre>{JSON.stringify(quoths, null, 2)}</pre>
    </>
  );
}
