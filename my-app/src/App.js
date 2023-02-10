import './App.css';
import backgroundSVG from "./images/pattern-background-desktop.svg";
import img from "./images/illustration-hero.svg"; 
import ContentCard from './components/ContentCard';
function App() {
  
  return (
    <div className="App">
      <div
      style  = {{
        backgroundImage: `url(${backgroundSVG})`,
        // backgroundColor: 'grey',
        backgroundSize: '100vh 100vw',
        height: "100vh",
        width: "100vw",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <img src={img} />
        <ContentCard/>
      </div>
      
    </div>
  );
}

export default App;
