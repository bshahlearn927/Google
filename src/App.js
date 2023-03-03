import { BrowserRouter, Link, Route, Router, Routes, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import { useAuth0 } from '@auth0/auth0-react';

import About from "./pages/About";
import Store from "./pages/Store";
import Navbar from "./pages/Navbar";
import Layout from "./pages/Layout";
import axios from "axios";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          {/* <Route path="/gmail" element={<Gmail/>} />
          <Route path="/images" element={<Images />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  )
}