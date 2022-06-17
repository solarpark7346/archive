import React from 'react';
import { BrowserRouter ,Route ,Routes } from "react-router-dom";

import './App.css';

import Home from '../home';
import Archive from '../pages/archive'
import Ninefruit from '../pages/ninefruit'

const App = (props) => (
    <BrowserRouter>
          <Routes>
            <Route exact={true} path ="/" element={<Home />} />
            <Route exact={true} path ="archive" element={<Home />} />

            <Route exact={true} path ="archive/main" element={<Archive />} />
            <Route exact={true} path ="archive/main/ninefruit" element={<Ninefruit />} />
          </Routes>
    </BrowserRouter>
);

export default App;
