import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path={ '/' } element={ <Home /> } />
        <Route path={ '*' } element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}
