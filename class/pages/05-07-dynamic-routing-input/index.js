// import axios from 'axios'
import {useMutation,gql} from '@apollo/client'
import { useRouter } from 'next/router'
import {useState} from 'react'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents){
                _id
                number
                message
        }
    }
`

export default function GraphqlMutationPage(){


    const router = useRouter()

    //input  state
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")


    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () => {
    
    
    
    try{
        const result = await callApi({
            variables: {writer: myWriter, title: myTitle, contents: myContents} //input창을 만들고 onChange & state 이용하면 입력값을 받을 수 있다
        }) 
        console.log(result)
        console.log(result.data.createBoard.message)
        alert('게시글 등록에 성공했어요.')
        alert('상세 페이지로 이동해볼까요?')
        router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)

    }catch(error){
        alert(error.message)

    } finally { //주로 로그를 남긴다. 무조건 실행된다.

    }
        
        
    }


    const onChangeWriter = (event) => {
        setMyWriter(event.target.value)
    }
    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setMyContents(event.target.value)
    }


    return(
        <>
            {/* <div>{data}</div> */}
            작성자: <input type="text" onChange={onChangeWriter}/><br/>
            제목: <input type="text" onChange={onChangeTitle}/><br/>
            내용:  <input type="text" onChange={onChangeContents}/><br/>
            <button onClick={callGraphqlApi}>GraphQL-API 요청하기</button>
        </>
    )
}