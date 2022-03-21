import { useState } from 'react'

export default function CounterDocumentPage(){
    const [ number , setNumber ] = useState("0")

    function counter(){
        const result = Number(number) + 1
        setNumber(result)
    }

    return(
        <div>
            <div>{number}</div>
            <button onClick={counter}>카운트 증가</button>
        </div>

    )

}