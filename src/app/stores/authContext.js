"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthContext = createContext({
  user: null,
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleLogOut:()=>{},
  randomAction: ()=>{},
  authReady: false,
  // email: "",
  // password: "",
  loading: true,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(true)
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getSession();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  const handleSignUp = async () => {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    supabase.auth.signOut();
    router.refresh();
    setUser(null);
  };

  const randomAction = () => {
    console.log("hello")
  }

  const context ={user, handleSignIn, email, setEmail, password, setPassword, handleLogout, handleSignUp, loading, randomAction, setLoading}

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContext;
