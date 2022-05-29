import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import QuickDemo from './component/QuickDemo';
import SearchPage from './pages/SearchPage';
import RandomPage from './pages/RandomPage';
import GameInfoPage from './pages/GameInfoPage';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/random"} />}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route path="/random" element={<RandomPage></RandomPage>}></Route>
          <Route path="/game/:id" element={<GameInfoPage />}></Route>
        </Routes>
        {/* <ToastContainer></ToastContainer> */}
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
