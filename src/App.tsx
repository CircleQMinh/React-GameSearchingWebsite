import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import QuickDemo from './component/QuickDemo';
import SearchPage from './pages/SearchPage';
import RandomPage from './pages/RandomPage';
import GameInfoPage from './pages/GameInfoPage';
import GameModesPage from './pages/GameModesPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import GenrePage from './pages/GenresPage';
import ThemePage from './pages/ThemePage';
import PlatformPage from './pages/PlatformPage';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/random"} />}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route path="/random" element={<RandomPage></RandomPage>}></Route>
          <Route path="/game/:id" element={<GameInfoPage />}></Route>
          <Route path="/gamemode/:id" element={<GameModesPage />}></Route>
          <Route path="/genre/:id" element={<GenrePage />}></Route>
          <Route path="/theme/:id" element={<ThemePage />}></Route>
          <Route path="/platform/:id" element={<PlatformPage />}></Route>
          <Route path="/error" element={<ErrorPage></ErrorPage>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        {/* <ToastContainer></ToastContainer> */}
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
