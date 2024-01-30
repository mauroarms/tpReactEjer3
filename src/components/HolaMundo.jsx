import { useState } from "react";

const HolaMundo = ({amiguillo}) => {
    
    const [frase, setFrase] = useState("")

    return (
        <div>
            <h1>Hello {amiguillo} {frase} !</h1>
            <button onClick={() => setFrase("(from changed state)")}>Click me</button>
        </div>
    );
};

export default HolaMundo;