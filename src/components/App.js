import React, { useState, useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import {UserProvider} from "../context/user";
import { ThemeContext, ThemeProvider } from "../context/theme";

function App() {
  //const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
    </ThemeProvider>
  );
}

export default App;
