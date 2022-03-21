import { useState } from 'react'

export default function HelloState(){
    const [ text , setText ] = useState("안녕하세요")

    function onClickButton(){
        if(text === "안녕하세요"){
            setText("반갑습니다")
        }else {
            setText("안녕하세요")
        }        
    }

    return(
        <div>
            <button onClick={onClickButton}>{text}</button>
        </div>

    )

}
