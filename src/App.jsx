import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/pages/Landing";
import FormPage from "./components/pages/FormPage";
import CardPreviewPage from "./components/pages/CardPreviewPage";

import "./styles/App.scss";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path="/newproject" element={<FormPage/>}/>
        <Route path="/cardpreview" element={<CardPreviewPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
