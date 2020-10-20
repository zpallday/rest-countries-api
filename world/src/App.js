import React from 'react';
import './App.css';
import Rounter from './components/Rounter'
import SearchForm from './components/SearchForm'
import RegionForm from './components/RegionFilter'
// import Details from './components/Details'
import NavBar from './components/Navbar'
function App() {
  return (
    <body>
      <NavBar/>
      <SearchForm/>
      <RegionForm/>
      <Rounter />
    {/* <Details /> */}
    </body>
  );
}

export default App;