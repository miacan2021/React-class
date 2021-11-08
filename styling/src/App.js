import React, {useState} from 'react'
import './App.css';
import EventList from './EventList'
import Model from './Model'
import NewEventForm from './NewEventForm';

function App() {
  const [showModel, setShowModel] = useState(false)
  const [showEvent, setShowEvent] = useState(true)
  const [events, setEvents] = useState([
    {title:'React Dojo', id:1},
    {title:'Svelte Meetup', id:2},
    {title:'Remix Lanch', id:3},
  ])

  const handleClose = () =>{
    setShowModel(false)
  }

  const handleClick = (id) =>{
      setEvents((prevEvents) =>{
        return prevEvents.filter(event => id !== event.id)
      })
  }

  return (
    <div className="App">
      <h1>Weekend Events</h1>
      {showEvent && (
        <div>
          <button onClick={() => setShowEvent(false)}>Hide Events</button>
        </div>
      )}
      
      {!showEvent && (
        <div>
          <button onClick={() => setShowEvent(true)}>Show Events</button>
        </div>
      )}
      {showEvent && <EventList events={events} handleClick={handleClick} />}
      
        {
          showModel && (
            <Model handleClose={handleClose}>
              <NewEventForm />
            </Model>
          )
        }
      <div>
        <button onClick={()=>setShowModel(true)}>Show Model</button>
      </div>

    </div>
  );
}

export default App;
