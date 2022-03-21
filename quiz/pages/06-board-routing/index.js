import {useRouter} from 'next/router'

export default function StaticRoutingPage(){
    
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
        <div>
            <button onClick={onClickMove1}>83011번 게시글로 이동</button>
            <button onClick={onClickMove2}>83012번 게시글로 이동</button>
            <button onClick={onClickMove3}>83013번 게시글로 이동</button>
        </div>
    )
}