import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Settings() {
  return (
    <Layout>
      <div className="">
        <div className="text-right w-full">
          <button
            onClick={() => signOut("google")}
            className="bg-gray-300 p-2 rounded-md"
          >
            logout
          </button>
        </div>
      </div>
    </Layout>
  );
}
