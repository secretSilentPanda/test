// import { useState } from "react";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState } from "react";
import {} from "./firebase/firebase";
// import { Redirect } from "react-router";
// import { AnimateSharedLayout } from "framer-motion";

function App() {
  const [user, setUser] = useState();

  onAuthStateChanged(getAuth(), (user) => {
    console.log(`user`, user);
    setUser(user);
  });
  return <Home user={user} />;
}

export default App;
