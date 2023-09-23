
import React from 'react'
 import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Movies from './pages/movies/Movies';
import MovieDetail from './pages/movies/MovieDetail';

const App = () => {
  return (
    <>

   <Navbar/>
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/movies/:type' element= {<Movies/>}/>
    <Route path="/movie/:id" element = {<MovieDetail/>}/>
   </Routes>
   
   <Footer/>
   
    </>
    
    
  )
}



export default App;
