import EventStats from './components/EventStats/EventStats';
import Ticket from "./components/tickets/ticket";
import HowToGetThere from './components/HowToGetThere/HowToGetThere'
import Events from './components/events/events';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import {  } from 'lucide-react';


function App() {

  return (
    <>
       <Navbar />
      <EventStats/>
      <Events/>
    <Ticket />
      <HowToGetThere />
      <Footer />
    </>
  );
}

export default App;


