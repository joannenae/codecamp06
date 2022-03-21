import BoardWriteUI from "./BoardWrite.presenter"
import { Router, useRouter } from 'next/router'

export default function BoardWrite(){

    const router = useRouter()
    const onClickMove1 = () => {
        router.push("/05-06-dynamic-routed-board/83011") //마지막 / 뭐라고 입력하든 이동 가능 문자 써도 됨
    }
    const onClickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/83012")
    }
    const onClickMove3 = () => {
        router.push("/05-06-dynamic-routed-board/83013")
    }

    return (
        <BoardWriteUI 
            onClickMove1={onClickMove1} 
            onClickMove2={onClickMove2} 
            onClickMove3={onClickMove3} 
            //props라는 객체 , aaa라는 키에 객체가 들어감 
        />
    )
}
