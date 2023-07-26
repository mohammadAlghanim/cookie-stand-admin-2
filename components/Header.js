import React from "react";
import { useAuth } from "@/context/authtext";

export default function Header() {
  const { logout, user } = useAuth();
  return (
    <header className="p-4 bg-green-500 text-gray-50 flex justify-between items-center">
      <h1 className="text-5xl text-black">Cookie Stand Admin</h1>
      <div className="px-4 py-2 text-white bg-green-700 rounded-md">
        <button onClick={logout}>Sign out</button>
        <div>
          <h4>{user.username}</h4>
        </div>
      </div>
    </header>
  );
}
