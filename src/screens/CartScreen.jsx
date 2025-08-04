// import React from "react";
// import { useCart } from "../context/CartContext";

// export default function CartScreen() {
//   const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
//     useCart();

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="container mt-5">
//       <h2>Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <table className="table table-bordered text-center">
//           <thead className="thead-light">
//             <tr>
//               <th>Item</th>
//               <th>Variant</th>
//               <th>Quantity</th>
//               <th>Price (Rs)</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={`${item._id}-${item.varient}`}>
//                 <td>
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     style={{ width: "60px" }}
//                   />
//                   <br />
//                   {item.name}
//                 </td>
//                 <td>{item.varient}</td>

//                 <td>
//                   <div className="d-flex justify-content-center align-items-center gap-2">
//                     <button
//                       className="btn btn-sm btn-outline-secondary"
//                       onClick={() => decreaseQuantity(item._id, item.varient)}
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{item.quantity}</span>
//                     <button
//                       className="btn btn-sm btn-outline-secondary "
//                       onClick={() => increaseQuantity(item._id, item.varient)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </td>

//                 <td>{item.price}</td>

//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => removeFromCart(item._id, item.varient)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}

//             <tr>
//               <td colSpan="3" className="text-end">
//                 <strong>Total:</strong>
//               </td>
//               <td colSpan="2">
//                 <strong>{totalPrice} Rs</strong>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }






// import React from "react";
// import { useCart } from "../context/CartContext";

// export default function CartScreen() {
//   const { cartItems } = useCart();

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="container mt-5">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? ( //It uses a ternary operator (? :) to decide what to show: condition ? showIfTrue : showIfFalse
//         <h2>Your Cart is empty</h2>
//       ) : (
//         <table className="table table-bordered text-center">
//           <thead className="thead-light">
//             <tr>
//               <th>Item</th>
//               <th>Variant</th>
//               <th>Quantity</th>
//               <th>Price (Rs)</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               // Use item._id and item.varient as a unique key)
//               <tr key={`${item._id}-${item.varient}`}>
//                 <td>
//                   <img
//                     src={item.image}
//                     // alt={item.name}
//                     style={{ width: "60px", height: "60px" }}
//                   />
//                   <br />

//                   {item.name}
//                 </td>
//                 <td>{item.varient}</td>
//                 <td>
//                   <div className="d-flex justify-content-center align-items-center gap-2">
//                     <span className="mx-2">{item.quantity}</span>
//                   </div>
//                 </td>
//                 <td>{item.price}</td>
//                 <td>
//                   <button className="btn btn-danger btn-sm">Remove</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// import {useCart} from "../context/CartContext";

// export default function CartScreen() {
//     const{cartItems}=useCart();

//     const totalPrice= cartItems.reduce((sum,item)=> sum+item.price,0);
//     return (
//         <div className="container">
//         <h1>Cart Items</h1>
//         {cartItems.length===0 ?(
//             <div>cart is empty</div>
//         ):(
//             <table className="table table-bordered text-center">
//                 <thead className="thead-light">
//                     <tr>
//                     <td>Item</td>
//                     <td>Quantity</td>
//                     <td>Varient</td>
//                     <td>Price</td>
//                     <td>Action</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {cartItems.map((item)=>(

                   
//                     <tr key='${item._id} ${item.varient}'>
//                         <td>
//                             <img src={item.image} style={{width:"60px",height:"60px"}}/> 
                        
//                         <br/>
//                         {item.name}
                        
//                         </td>
//                         <td>{item.quantity}</td>
//                         <td>{item.varient}</td>
//                         <td>{item.price}</td>
//                         <td>
//                             <button className="btn btn-danger">Delete</button>
//                         </td>
//                     </tr>
                    
//                      ))}
//                      <tr>
//                         <td colSpan="3" className="text-end">
//                             <strong>Total:</strong>
//                         </td>
//                         <td colSpan="2">
//                             <strong>{totalPrice} Rs</strong>
//                         </td>
//                      </tr>
//                 </tbody>
//             </table>
            
//         )}
//         </div>
//     );
// }



import {useCart} from "../context/cartContext.jsx";

export default function CartScreen() {
    const {cartItems}= useCart();

    const totalPrice= cartItems.reduce((sum,item)=> sum +item.price,0);
    return(
        <div>
            <h1>Welcome to Cart Page</h1>
            {cartItems.length===0? (
                <h1>Your Cart is empty</h1>
            ):(
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Item</td>
                            <td>Varient</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                    <tr>
                            <td>
                                <img src={item.image} style={{width:"60px", height: "60px"}}/>
                                <br/>
                                {item.name}
                            
                            </td>
                            <td>{item.varient}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td><button className="btn btn-danger">Remove</button></td>
                        </tr>
                        ))}
                        <tr>
                            <td colSpan={4}>Total Price: </td>
                            <td colSpan={1}>{totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}