import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

const useAuth = () => {
  const [user, setUser] = useState(supabase.auth.user());

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const signIn = async () => {
    await supabase.auth.signIn();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return { user, signIn, signOut };
};

export default useAuth;