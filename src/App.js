// DEPENDENCIES

// HOOKS
import api from "./hooks/api"
import Calls from "./hooks/Calls"
import FormHooks from "./hooks/FormHooks"

// STYLES
import './App.css';


function App() {
  
  const {countryList} = api()
  const {getHomeCountry, getVisitCountry, convertCurr} = Calls()
  const {handleChange, handleSubmit} = FormHooks()

  // const dropdown = () => {
  //   console.log(Object.keys(countryList).length)
  //   for (let i = 0; i < Object.keys(countryList).length; i++) {
  //     return <option>{Object.keys(countryList)[i]}</option>
  //   }
  // }

  const dropdown = () => {
    const countries = Object.keys(countryList)
    countries.map((c) => (
      <option>{c}</option>
    ))
  }

  return (
    <div className="App">
      <h1>hello app</h1>
      <h2>Where do you live?</h2>
      <select>
        <option>Select a Country</option>
        {countryList.map((c) => (
          <option></option>
        ))}
      </select>
    </div>
  );
}

export default App;
