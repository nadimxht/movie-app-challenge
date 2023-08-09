import React, { useState } from 'react';
import { moviesList } from './assets/mookData';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';

function App() {

  
  
  const [movieList, setMovieList] = useState(moviesList);
  const [searchWord, setSearchWord] = useState('');
  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => setMovieList((prev)=>[...prev , newMovie]);
  const handleSearch = (e) => setSearchWord(e.target.value);

  return (
    <div className='container'>
      
      <SearchBar
        handleSearch={handleSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />

      <MoviesList
        moviesArray={
          searchWord
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : ratingSearch > 1
            ? movieList.filter((movie) => movie.rate >= ratingSearch)
            : movieList
        }
      />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
}

export default App;
// import React from 'react'
// import Navbar from './pages/Navbar'
// import { BrowserRouter , Routes , Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import NotFound from './pages/NotFound'

// export default function App() {
//   return (
//     <div>
      
//       <BrowserRouter>
//       <Navbar/>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/About' element={<About />} />
//           <Route path='/Contact' element={<Contact/>} />
//           <Route path="/:id" element={<NotFound/>}/> 
//         </Routes>
//       </BrowserRouter>

//     </div>
//   )
// }
