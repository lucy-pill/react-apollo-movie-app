import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import { Reset } from 'styled-reset';

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Movie/>}/>
      </Routes>
    </BrowserRouter>
  );
}
