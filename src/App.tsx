import EventStats from './components/EventStats/EventStats';
import Ticket from "./components/tickets/ticket";
import HowToGetThere from './components/HowToGetThere/HowToGetThere'
import Events from './components/events/events';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Sponsor from "./components/sponsor/sponsor";
import Hero from './components/Hero/Hero';
import TicketSection from './components/TicketSection/TicketSection';


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <EventStats/>
      <Events/>
      <Ticket />
      <TicketSection />
      <Sponsor />
      <HowToGetThere />
      <Footer />
    </>
  );
}

export default App;