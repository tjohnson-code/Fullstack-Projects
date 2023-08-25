import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: quoths } = await supabase.from("quoths").select();
  return <pre>{JSON.stringify(quoths, null, 2)}</pre>;
}
