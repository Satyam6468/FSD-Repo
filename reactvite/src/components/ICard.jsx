import React from 'react'
import pic from '../images/Screenshot 2026-02-06 182053.png'
function ICard({data}){
    return (
        <div>
         <h2>College:{data.college}</h2>
        <div>
            <img src={pic} height={200} width={200} alt="No image" />
        </div>
         <h2>Roll:{data.roll}</h2>
         <h2>Name:{data.name}</h2>
            <h2>Branch:{data.branch}</h2>
        </div>
)}
export default ICard;
