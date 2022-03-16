// DEPENDENCIES

// COMPONENTS
import Footer from "./components/Footer"

// HOOKS
import api from "./hooks/api"
import Calls from "./hooks/Calls"
import FormHooks from "./hooks/FormHooks"

// STYLES
import './App.css';


function App() {
  
  // styled components
  const flexDiv = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }

  const {countryList} = api()
  const {getHomeCountry, getVisitCountry, convertCurr} = Calls()
  const {handleChange, handleSubmit} = FormHooks()

  const countryCodes = Object.keys(countryList)
  const countryNames = Object.values(countryList)
  const countryOptions = countryCodes.map((e,i) => {
    return [e, countryNames[i]]
  })

const dropdown = () => {
  return <>
    {countryOptions.map((c) => (
      <option>
        {c[0]} - {c[1]}
      </option>
    ))}
  </>
}


  return (
    <div className="App">
      <h1>TANKMATH</h1>
      <form>
        <h2>Where are you visiting?</h2>
        <select>
          <option>Select a Country</option>
          {dropdown()}
        </select>
        <h3>How much does gas cost there?</h3>
        <div style={flexDiv}>
          <input type="number" step="0.01" />
          <p>[currency]/[gas unit]</p>
        </div>
        <h2>Where are you from?</h2>
        <select>
          <option>Select a Country</option>
          {dropdown()}
        </select>
        <h3>To you, the price listed above would feel like:</h3>
        <div style={flexDiv}>
          <h2>[CALCULATED PRICE]</h2>
          <p>[currency]/[gas unit]</p>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default App;
