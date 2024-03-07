import { Container } from "semantic-ui-react"
import EventDashboard from "../../features/events/dashboard/EventDashboard"
import NavBar from "./nav/NavBar"
import { useState } from "react"
import { Events } from "../model/Events";

function App() {
  const [formOpen,setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Events | null>(null);

  function handleSelectEvent(event: Events){
    setSelectedEvent(event);
    setFormOpen(true);
  }
  
  return (
    <>

      <NavBar setFormOpen={setFormOpen}/>
      <Container className="main">
      <EventDashboard 
      formOpen={formOpen} 
      setFormOpen={setFormOpen}
      selectedEvent={selectedEvent}
      selectEvent={handleSelectEvent}/>
      </Container>
      

    </>
  )
}

export default App
