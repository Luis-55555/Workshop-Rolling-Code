import EventStats from './components/EventStats/EventStats';
import Ticket from "./components/tickets/ticket";
import HowToGetThere from './components/HowToGetThere/HowToGetThere'
import Events from './components/events/events';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Sponsor from "./components/sponsor/sponsor";
import Hero from './components/Hero/Hero';
import TicketSection from './components/TicketSection/TicketSection';
import Speakers from './components/speakers/Speakers';
import MainPartner from './components/MainPartners/MainPartners';
import useScrollReveal from './hooks/useScrollReveal';


function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <EventStats/>
      <Speakers/>
      <Events/>
      <Ticket />
      <TicketSection />
      <MainPartner />
      <Sponsor />
      <HowToGetThere />
      <Footer />
    </>
  );
}

export default App;