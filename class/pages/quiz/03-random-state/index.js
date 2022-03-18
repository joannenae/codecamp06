import { useState } from 'react'

export default function randomToken(){
    const [ random , setRandom ] = useState("000000")

    function OnClickSend(){
        const token = String(Math.floor( Math.random() * 1000000)).padStart(6,"0")
        setRandom(token)
    }

    return(
        <div>
            <div>{random}</div>
            <button onClick={OnClickSend}>인증번호전송</button>
        </div>

    )
}
