import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState("ivana");

  return (
    <div className="app">
      <Router>
        {!user ? (
          <h1>Login page</h1>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/room/:roomId" element={<Chat />}></Route>
                <Route path="/" element={<h1>Welcome</h1>}></Route>
              </Routes>

              {/*React-Router -> Chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
