// DEPENDENCIES

// API
import api from "./hooks/api"
// STYLES
import './App.css';


function App() {
  
  const {countryAPI, converterAPI} = api()

  return (
    <div className="App">
      <h1>hello app</h1>
      <h3>country api: {countryAPI}</h3>
      <h3>converter api: {converterAPI}</h3>
    </div>
  );
}

export default App;
