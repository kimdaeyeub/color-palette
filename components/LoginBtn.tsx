"use client";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  useSession,
} from "next-auth/react";
import React, { useEffect, useState } from "react";

const LoginBtn = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<string>,
    ClientSafeProvider
  > | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="px-6 py-2 rounded-lg bg-black text-white font-medium text-lg"
          >
            Login
          </button>
        ))}
    </>
  );
};

export default LoginBtn;
