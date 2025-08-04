import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useCart } from '../context/cartContext';

export default function Pizza({pizza}) {
    const [quantity,setquantity]=useState(1)
    const [varient, setvarient] =useState('small')
    const {cartItem,addToCart} = useCart();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddToCart = () => {
      if(quantity <= 0) {
        alert("Please select a valid quantity");
        return;
      }
      if(!varient) {
        alert("Please select a variant");
        return;
      }
      addToCart(pizza, quantity, varient);
    }


  return (
    <div >
        <div onClick={handleShow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} style={{width:'200px',height:'200px'}} />
        </div>
        <div className='flex-container'>
            <div className='w-100'>
            <p>Varient</p>
            <select value={varient} className='form-control'onChange={(e)=>{setvarient(e.target.value)}}>
                {pizza.varients.map((varient)=>{
                   return <option value={varient}>{varient}</option>
                })}
            </select>
            </div>
            <div className='w-100'>
                <p>Quantity</p>
                <select className=' form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x,index)=>{
                    return <option key={quantity} value={index+1}>{index+1}</option>;
                } )}
                </select>
            </div>

        </div>
        <div className='flex-container'>
            <div className='w100 form-control'>
               <div className=''> T. Price {pizza.prices[0][varient]*quantity}</div>
            </div>

            <div className='w-100 form-control'> 
                <button  className='btn btn-danger' onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>


        



 
   
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image}></img>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button onClick={handleClose} >Close</button>
       
        </Modal.Footer>
      </Modal>
    
  


    </div>
  )
}
