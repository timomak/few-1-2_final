import "./App.css";
import Heading from "./components/Heading";
import MetalMeta from "./components/MetalMeta";

function App() {
  return (
    // className='App'
    <div className='App'>
      <Heading myName='Timo' />
      <br />
      <MetalMeta />
    </div>
  );
}

export default App;
