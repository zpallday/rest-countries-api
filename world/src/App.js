import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import Rounter from './components/Rounter'
import SearchForm from './components/SearchForm'
import RegionForm from './components/RegionFilter'
// import Details from './components/Details'
function App() {
  return (
    <body>
    <div className="App">
      <Nav/>
      <div className="forms">
      <SearchForm/>
      <RegionForm/>
      </div>
      <Rounter />
    </div>
    {/* <Details /> */}
    </body>
  );
}

export default App;