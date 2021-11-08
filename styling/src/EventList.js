import React from 'react'
import styles from './EventList.module.css';

export default function EventList({ events, handleClick }){
return(
    <div>
        {events.map((event, index)=>(
            <div className={styles.card} key={index} >
            <h2>{index} - {event.title}</h2>
            <button className={styles.btn} onClick={() => handleClick(event.id)}>Delete Event</button>
            </div>
        ))}
    </div>
)
}