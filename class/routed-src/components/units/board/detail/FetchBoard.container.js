import {useQuery, gql} from '@apollo/client'
import { Router, useRouter } from 'next/router'
import FetchBoardUI from './FetchBoard.presenter'

export default function FetchBoard(){
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_BOARD, {
        variables: {number:Number(router.query.number)} //aaa = url에 입력된 값
    })
    
    console.log(data)
} 