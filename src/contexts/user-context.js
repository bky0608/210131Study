import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

// 주입
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || null));

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <Context.Provider //
      value={{ user, setUser }}
    >
      {children}
    </Context.Provider>
  );
}

// 가져다 쓰기
export function userUserContext() {
  return useContext(Context);
}
