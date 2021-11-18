import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({addEvent}) {

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

    const handleSubmit =(e) =>
    {
    //   prevent default action of browser to refresh on submit of form  
    e.preventDefault()

    const event={  
        title:title,
        date: date,
      //adding id not perfect way but will do for now
        id:Math.floor(Math.random()*10000)
    }

    addEvent(event)
    resetForm()
    
    }

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
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
            
           

        </form>

    )
}
