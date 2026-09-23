import React from "react"
import ICard from './ICard'
function ICardGallery(){
    const student=[{
        college:"ABES Engineering College"
        ,roll:"325344"
        ,name:"Satyam"
        ,branch:"CSE 24"
    },{
        college:"ABES Engineering College"
        ,roll:"344"
        ,name:"Sahul"
        ,branch:"CSE 27"
    }
]
    return (
        <div>
            {student.map(x)=>(
                <ICard data={x}/>
            )}
                    </div>
    )
}
export default ICardGallery;
