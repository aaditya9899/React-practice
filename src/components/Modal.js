import './Modal.css'


export default function Modal({children,handleClose}) {
    return (
        <div className="modal-backdrop">

           <div className="modal">
              {children}
              <div><button onClick={handleClose}>close</button></div>
              
            </div>
            
        </div>
    )
}
