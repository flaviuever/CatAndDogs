import React from "react";
import Navbar from "./components/navbar";
import MyImages from "./pages/myImages";
import Upload from "./pages/upload";
import PublicImages from "./pages/publicImages";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Favourites from "./pages/favourites";

function App() {
  return (
    <div>
      <HashRouter>
          <Navbar/>
        <Routes>
          <Route path="/my-images" element={<MyImages/>}/>
          <Route path="/public-images" element={<PublicImages/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/favourites" element={<Favourites/>}/>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;