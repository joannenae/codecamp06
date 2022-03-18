import { useState } from 'react'
import axios from 'axios'

export default function RestApiPage(){
    const [data , setData] = useState("")

    const callRestApi = async () => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)
        console.log(result.data.title)
        setData(result.data.title)
    }
    return (
        <div>
            <div>{data}</div>
            <button onClick={callRestApi}>!REST_API 요청하기!</button>
        </div>
    )

}