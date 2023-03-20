import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Side_Nav from './components/Side-Nav';
import Player from './components/Player';
import Queue from './components/Queue';
import Recommendation from './components/Recommendation';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="parent-con">
        <Side_Nav/>
        <div className="sub-parent-con">
          {/* <Hero/> */}
          <Player/>
          <Queue/>
          <Recommendation/>
        </div>
      </div>
    </div>
  );
}

export default App;
