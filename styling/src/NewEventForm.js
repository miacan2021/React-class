import { useState } from "react";
import styles from './NewEventForm.module.css'

export default function NewEventForm(){
    const [title, setTitle] = useState('Title')
    const [date, setDate] = useState('2021/11/8')


    return(
        <form className={styles.newEventForm}>
        <label>
            <span>Event Title</span>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
            <span>Event Date</span>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <button>Submit</button>
        <p>title - {title}, date - {date}</p>
        </form>
    )
}