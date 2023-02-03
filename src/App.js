import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import NotFound from './components/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path={ '/form' } element={ <Form /> } />
        <Route path={ '/' } element={ <Home /> } />
        <Route path={ '*' } element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

export default App;
