import { useRouter } from "next/router";
import { useQuery , useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { DELETE_BOARD } from "./BoardDetail.queries";


export default function BoardDetail () {
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD)
    // const { data } = useQuery(FETCH_BOARD);

    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId : String(router.query.boardid)} //폴더명

    })
    //event.target : 태그
    const onClickDelete = (event) => {
        // console.log(event.target.id)
        try{
            deleteBoard({
                variables:{boardId:event.target.id},
                refetchQueries: [{query:FETCH_BOARD}]
            })
            alert("삭제되었습니다.")
            router.push('/boards')
        }catch(error){
            alert(error.message)
            console.log("에러발생!!")
        }

    }

    const onClickMoveToBoardList = () => {
            router.push('/boards')
        }
        
    const onClickMoveToBoardEdit = () => {
            router.push(`/boards/${router.query.boardid}/edit`)
        }
    
    return(
        <BoardDetailUI 
            data={data} 
            onClickMoveToBoardList={onClickMoveToBoardList}
            onClickMoveToBoardEdit={onClickMoveToBoardEdit}
            onClickDelete={onClickDelete}
        />
    )
}
