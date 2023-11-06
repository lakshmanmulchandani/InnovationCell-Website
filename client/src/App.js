import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import PastEvents from './Components/Events/PastEvents';
import UpcomingEvents from './Components/Events/UpcomingEvents';
import Navbar from './Components/Navbar/Navbar';

import Sponsors from './Components/Sponsors/Sponsors';
import MakerSpace from './Components/MakerSpace/MakerSpace';
import Team from './Components/Team/Team';
import SnowfallComponent from './Components/Snowfall/SnowfallComponent';
import NameCard from './Components/Team/NameCard';
import Executives from './Components/Team/Executives';
import Contact from './Components/ContactUs/Contact';
function App() {
  return (
    <div className="App " >
 <div className="background-image"></div>
     <SnowfallComponent/>
     <Contact/>
      <MakerSpace />

      <Team />
      
      <Team />
    </div>
  );
}

export default App;
