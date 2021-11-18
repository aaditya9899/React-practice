import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm() {

    const [title,setTitle]=useState('')
    const [date,setDate]=useState('')
   
    // const handleChange=(e)=>{
    //    setTitle(e.target.value)
    //      }
    const resetForm = () =>
    {
        setTitle('')
        setDate('')
    }

    return (
        <form className="new-event-form">
            <label>
            <span>Event Title:</span>
            <input type="text"  onChange={(e)=>
            setTitle(e.target.value)} value={title}/>
            </label>

            <label>
                <span>
                    Event Date:

                </span>
                <input type="date" onChange={(e)=>
            setDate(e.target.value)}value={date}></input>
            </label>
            <button>
                Submit
            </button>
            
            <p>title-{title},date-{date}</p>
            <p onClick={resetForm}>Reset the Form</p>

        </form>

    )
}
