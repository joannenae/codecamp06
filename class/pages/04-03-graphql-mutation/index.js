import { useState } from 'react'
import { useMutation , gql} from '@apollo/client'
// import axios from 'axios'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"내승현", title:"오늘은 집에 일찍 가길", contents:"아싸 집가서 자야지"){
            _id
            number
            message
        }
    }
`

export default function GraphulMutationPage(){
    const [data , setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    
    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
        const result = await callApi() // graphql - api 방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    } 

    return(
        <div>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기 !!!</button>
        </div>
    )


}