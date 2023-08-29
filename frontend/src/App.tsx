import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddPostPage, HomePage} from "./pages/_index";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/add-post" element={<AddPostPage />}></Route>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
