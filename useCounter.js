import { useState } from "react"

export const useCounter=(initialValue=10)=>{
    
    const [counter, setCounter] = useState(initialValue);
    
    const incremento = (value=1)=>{
        setCounter(counter+value);
    }

    const decremento=(value=1)=>{
        if (counter>0) {
            setCounter(counter-value);
        }
    }

    const reset=()=>{
        setCounter(initialValue)
    }

    return{
        counter:counter,
        incremento,
        decremento,
        reset
    }
}