import React, { useState } from 'react'
import ImageManuplation from "./components/ImageManuplation.jsx"
function UpdateName() {

    const [Student, setName] = useState('Satyam Agrawal');
    const [college, setCollege] = useState('ABES');

    function updateName() {
        setName('Satyam');
    }
    function updateCollege(){
        setCollege('ABES College');
    }
    return (
        <div>

            <h1>Welcome to react App Devolopment</h1>


            <ImageManuplation/>
        </div>
    )
}

export default UpdateName