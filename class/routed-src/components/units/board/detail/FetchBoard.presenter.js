export default function FetchBoardUI(props){

    return (
        <>
            <div>{props.data?.fetchBoard?.number}번 게시글에 오신 것을 환영합니다.</div>
            <div>제목: {props.data?.fetchBoard?.title}</div>
            <div>작성자: {props.data?.fetchBoard?.writer}</div>
            <div>내용: {props.data?.fetchBoard?.contents}</div>
        </>
    )
}
