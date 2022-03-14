// DEPENDENCIES

// HOOKS
import CallHooks from "./hooks/Calls"

// STYLES
import './App.css';


function App() {
  
  const {getHomeCountry} = CallHooks()

  return (
    <div className="App">
      <h1>hello app</h1>
    </div>
  );
}

export default App;
