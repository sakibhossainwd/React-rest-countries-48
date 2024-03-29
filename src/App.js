import './App.css';
// import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
     {/* <LoadCountries></LoadCountries> */}
     <Header></Header>
     <Countries></Countries>
    
    </div>
  );
}


// function LoadCountries(){
//   const [countries, setCountry] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountry(data))
//   }, [])
//   return (
//     <div>
//       <h1>Let's Explore All Over the Countries</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div>
//       <h3>Name: {props.name}</h3>
//       <h5>Population: {props.population}</h5>
//     </div>
//   )
// }

export default App;
