import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Settings() {
  return (
    <Layout>
      <div className="bg-gray-900 h-screen w-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signOut("google")}
            className="bg-white p-4 rounded-lg"
          >
            logout
          </button>
        </div>
      </div>
    </Layout>
  );
}
