import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <Layout>
      <div className="text-black-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex items-center bg-gray-300 text-black gap-1 rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="/" className="w-9 h-9" />
          <span className="px-3 text-md">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
