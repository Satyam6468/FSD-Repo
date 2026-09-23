import React, { useState } from "react";
import cat from "../images/cat.jpg";

function ImageManipulation() {
    const [catHeight, setCatHeight] = useState(200);
    const [catWidth, setCatWidth] = useState(200);
        const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function increaseHeight() {
        setCatHeight(catHeight + 20);
    }

    function increaseWidth() {
        setCatWidth(catWidth + 20);
    }

    function changeBGColor() {
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    }
    return (
        <div>
            <h2>Image Manipulation</h2>
            <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, padding: '20px', display: 'inline-block' }}>
                <img src={cat} alt="CAT" style={{ height: `${catHeight}px`, width: `${catWidth}px` }} />
            </div>
            <div>
                <button onClick={increaseHeight}>Increase Height</button>
                <button onClick={increaseWidth}>Increase Width</button>
                <button onClick={changeBGColor}>Change Color</button>
            </div>
        </div>
    );
}

export default ImageManipulation;