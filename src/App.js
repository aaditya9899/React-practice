//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
function App() {
  const [showModal,setShowModal]=useState(false)
  const [events,setEvents]= useState([
     
    {title:"mario's birthday bash",id:1},
    {title:"bowers live stream",id:2},
    {title:"race on moo moo",id:3}
    
 ])
 console.log(setShowModal)



const handleClose=()=>{
  setShowModal(true)
}
const HandleClose=()=>{
  setShowModal(false)
}

 const subtitle="All the latest events in Marioland"

  return (
    <div className="App">
   <Title title="Events in your area" subtitle={subtitle}/>
   <Title title="Another title" subtitle="Another subtitle"/>
   {/* <Modal>
    <h2>
              10% Off Coupon code!!
              </h2>
                <p>
           Use the code NINJA10 at the checkout.
                </p> 
                
   </Modal> */}
   <button onClick={handleClose}>Click to read terms and conditions</button>
   {showModal && <Modal handleClose={HandleClose}>
   <h1>Terms and condition</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet ea tempore libero tenetur reprehenderit sapiente culpa suscipit tempora. Culpa quam alias perferendis beatae natus, quibusdam voluptatibus iste veritatis enim.</p>

   <a href="...">Find out more...</a>
   </Modal>}
   </div>
  );
}

export default App;
