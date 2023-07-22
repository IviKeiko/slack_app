import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/room/:roomId" element={<Chat />}></Route>
            <Route path="/" element={<h1>Welcome</h1>}></Route>
          </Routes>

          {/*React-Router -> Chat screen */}
        </div>
      </Router>
    </div>
  );
}

export default App;
