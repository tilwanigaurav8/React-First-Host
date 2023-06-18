import { useState } from "react";

const Home=()=>{

    let [te,setTe]=useState("");
    let [count,setCount]=useState(0);


    
    const handleKeyPress = (e) => {
        let text=e.target.value;
        
        let numWords=0;
        setTe(text);
        if(text===""){
            setCount(0);
        }
        else{
            for (var i = 0; i < text.length; i++) {
                var currentCharacter = text[i];
                if (currentCharacter === " ") {
                    numWords += 1;
                }
            }
          
            numWords += 1;
            setCount(numWords);
        }
        
      }

    return(
        <div className="formb">
            <form>
                <label className="forml">Paragraph Word Counter</label>
                <br /><br />
                <textarea className="ta" value={te} required onChange={handleKeyPress} />

                <br /><br />

                <h2>Words : {count}</h2>

            </form>

        </div>

    )
}

export default Home;