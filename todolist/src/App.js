
import './App.css';
import FilterFunction from './Components/FunctionComponent';
import Home from './Components/HomeComponent';


function App() {
  
  return (
    <div className="App">
      <Home/>
      <FilterFunction/>
      
     
      <div className="m-5 d-flex justify-content-between">
        <p>Made with ❤️ at nFactorial in 2022.</p>
        <p>Credits: icons from Icons8.</p>
      </div>
    </div>
    
  );
}

export default App;
