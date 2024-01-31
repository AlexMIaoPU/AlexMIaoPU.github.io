import NavBar from './components/NavBar'; 
import { Welcome } from './components/Welcome';
import { Kuma } from './components/Kuma';
import { Info } from './components/Info';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="parent">
      <NavBar id="home-top"/>
      <Welcome />
      <Kuma />
      <Info id="info"/>
      <Projects id="projects"/>
      <Footer />
    </div>
  );
}

export default App;
